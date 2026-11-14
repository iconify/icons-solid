import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aq34zxffe {
  d: path("M14.6 21.5H4.5v-19h15v9.4m-12-5.4H10m3 0h3.5m-9 3.5H10m3 0h3.5m-9 3.5H10m3 0h2.2m2.8 1.25V21");
}

.b4hu1abqx {
  d: path("M15.25 18.25L18 21l2.75-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aq34zxffe"/><path class="b4hu1abqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:statement-running-balance"} {...others} />);
}

export default Component;
