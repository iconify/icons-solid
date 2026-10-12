import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dldnhmbjp {
  d: path("M12 21.25A9.25 9.25 0 1 1 21.25 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.we-2i6bsw {
  d: path("M12 7.25V12l-3 2m6.5 4.75a2.75 2.75 0 0 1 5.5 0Zm-.5 2.5h6.25");
}
</style><g class="hntgybcog"><path class="dldnhmbjp"/><path class="we-2i6bsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:morning-routine"} {...others} />);
}

export default Component;
