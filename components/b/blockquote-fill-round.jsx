import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v_vw0tbqh {
  fill: currentColor;
  d: path("M5 6v12a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0m3-1h12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m0 4h12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m0 4h12a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2m0 4h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2");
}
</style><path class="v_vw0tbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:blockquote-fill-round"} {...others} />);
}

export default Component;
