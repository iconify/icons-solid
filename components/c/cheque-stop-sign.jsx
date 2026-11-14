import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hez2xv43g {
  d: path("M9.8 18.5H2.5v-13h19v4.7M6 9.5h5.5m-5.5 5h3.5");
}

.k1_fefb0h {
  d: path("M14.5 13h7v8.75h-7Zm1.75 0v3.25M18 13v3.25M19.75 13v3.25m-5.25 3l-1.75-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hez2xv43g"/><path class="k1_fefb0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cheque-stop-sign"} {...others} />);
}

export default Component;
