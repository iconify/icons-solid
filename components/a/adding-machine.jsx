import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l2wcevlsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7h17v14.5h-17Zm6 0V2.5h5a2 2 0 0 1 2 2V7M7 10.5h10m-9.5 3.25h.01m4.49 0h.01m4.49 0h.01M7.5 16.5h.01m4.49 0h.01m4.49 0h.01M7.5 19h.01M12 19h.01m4.49 0h.01");
}
</style><path class="l2wcevlsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:adding-machine"} {...others} />);
}

export default Component;
