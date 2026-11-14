import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a85dybc_m {
  d: path("M7.5 13.5h5v5h-5Z");
}

.afxs8hbom {
  d: path("m9 15.5l1.5 1.5l5-5");
}

.snahbcc9i {
  d: path("M4.5 2.5h15v19h-15Zm3.5 4h8m-8 4h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="snahbcc9i"/><path class="a85dybc_m"/><path class="afxs8hbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kyc-consent"} {...others} />);
}

export default Component;
