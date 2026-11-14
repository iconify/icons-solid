import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kstidlv3y {
  d: path("M12.2 19.5H2.5v-15h19v10.3");
}

.oxf30sb5u {
  d: path("m5.5 10.5l4-4l3.99 3.99m-1.276 6.01H5.5v-6M16 9h3m-2.8 3H18m-3 2.5l6.5 3.5l-6.5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kstidlv3y"/><path class="oxf30sb5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:listing-active"} {...others} />);
}

export default Component;
