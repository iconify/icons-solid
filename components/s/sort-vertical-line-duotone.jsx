import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f75s_sbbx {
  d: path("M16 18L16 6M12 10.125L16 6L20 10.125");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jwe4axb7c {
  d: path("M8 6L8 18M4 13.875L8 18L12 13.875");
}
</style><g class="hntgybcog"><path class="f75s_sbbx"/><path class="jwe4axb7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-vertical-line-duotone"} {...others} />);
}

export default Component;
