import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3y2-bczb {
  fill: currentColor;
  d: path("m12 13.5l6-4l-6-4zm-8.3 8.625L1.85 7.2L5 6.85V19h13.3l.125 1.325zM7 17V2h15v15z");
}
</style><path class="d3y2-bczb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:animated-images-sharp"} {...others} />);
}

export default Component;
