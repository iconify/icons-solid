import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hef6o_beo {
  fill: currentColor;
  d: path("M6 6h2v12H6zm3.5 6l8.5 6V6zm6.5 2.14L12.97 12L16 9.86z");
}
</style><path class="hef6o_beo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-skip-previous"} {...others} />);
}

export default Component;
