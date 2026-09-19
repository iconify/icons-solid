import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fiv7ktv_g {
  fill: currentColor;
  d: path("m12.58 9.75l-.87-.87l.23-.66h.1zm-2.23-2.23L10.92 6h2.14l2.55 6.79L22 19.17V4c0-1.1-.9-2-2-2H4.83zm10.14 15.79L19.17 22H4c-1.1 0-2-.9-2-2V4.83L.69 3.51L2.1 2.1l19.8 19.8zm-8.39-8.38l-3.3-3.3L6.41 18h2.08l1.09-3.07z");
}
</style><path class="fiv7ktv_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-font-download-off"} {...others} />);
}

export default Component;
