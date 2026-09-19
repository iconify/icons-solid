import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qr2nt_a1u {
  fill: currentColor;
  d: path("M6.83 4H22v15.17l-2-2V8h-9.17zm13.66 19.31L17.17 20H2V4.83L.69 3.51L2.1 2.1l19.8 19.8zM15.17 18l-10-10H4v10z");
}
</style><path class="qr2nt_a1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-web-asset-off"} {...others} />);
}

export default Component;
