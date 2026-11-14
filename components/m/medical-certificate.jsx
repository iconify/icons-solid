import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.com3gja5u {
  fill: currentColor;
  d: path("M5.75 6.75h2.5v2h2v2.5h-2v2h-2.5v-2h-2v-2.5h2Z");
}

.hkq2o6bsq {
  d: path("M12.5 8H17m-4.5 3H15m-.25 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm1.5 2.5l-.75 2.75M18.75 19l.75 2.75");
}

.iyxsvtbea {
  d: path("M12 17H2.5V3.5h19v9.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iyxsvtbea"/><path class="com3gja5u"/><path class="hkq2o6bsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:medical-certificate"} {...others} />);
}

export default Component;
