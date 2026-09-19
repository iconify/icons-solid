import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.slm8u7s3p {
  fill: currentColor;
  d: path("M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z");
}
</style><path class="slm8u7s3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-data-array"} {...others} />);
}

export default Component;
