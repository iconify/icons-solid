import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efz-9di1o {
  d: path("m15 18.5l3 3l3-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnxnuacte {
  d: path("M14.1 21.5H5v-19h13v9.2m-8-6.2h3m5 9v7");
}
</style><g class="ulnmmdpxh"><path class="vnxnuacte"/><path class="efz-9di1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:phone-down"} {...others} />);
}

export default Component;
