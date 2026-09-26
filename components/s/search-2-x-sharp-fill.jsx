import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-tt_61vl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20 11C20 15.9706 15.9706 20 11 20C6.0294 20 2 15.9706 2 11C2 6.0294 6.0294 2 11 2C15.9706 2 20 6.0294 20 11ZM12.4142 11L14.1213 12.7071L12.7071 14.1213L11 12.4142L9.2929 14.1213L7.8787 12.7071L9.5858 11L7.8787 9.2929L9.2929 7.8787L11 9.5858L12.7071 7.8787L14.1213 9.2929L12.4142 11Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xmeb_n1nn {
  d: path("M16.2929 16.2929L21.2929 21.2929");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="b-tt_61vl"/><path class="xmeb_n1nn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-2-x-sharp-fill"} {...others} />);
}

export default Component;
