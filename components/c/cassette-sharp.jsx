import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fqdydbc_x {
  cx: 9.25px;
  cy: 10.75px;
  r: 1.5px;
}

.j0fd-rblx {
  d: path("M2.75 4.25h18.5v15.5H2.75z");
}

.jqbcxebvw {
  d: path("M10.75 10.75h2.5m-6.5 9L8 17.25h8l1.25 2.5");
}

.lre_7u_tk {
  cx: 14.75px;
  cy: 10.75px;
  r: 1.5px;
}

.w0q23woyo {
  d: path("M5.25 6.75h13.5v8H5.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="j0fd-rblx"/><path class="w0q23woyo"/><circle class="fqdydbc_x"/><circle class="lre_7u_tk"/><path class="jqbcxebvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cassette-sharp"} {...others} />);
}

export default Component;
