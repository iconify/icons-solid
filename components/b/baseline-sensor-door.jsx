import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z9-r99bng {
  fill: currentColor;
  d: path("M18 2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2m-2.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5");
}
</style><path class="z9-r99bng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-sensor-door"} {...others} />);
}

export default Component;
