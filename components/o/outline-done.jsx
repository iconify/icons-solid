import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l3hhis53x {
  fill: currentColor;
  d: path("M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4z");
}
</style><path class="l3hhis53x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-done"} {...others} />);
}

export default Component;
