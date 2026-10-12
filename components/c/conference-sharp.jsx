import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aeekdrycf {
  cx: 18.5px;
  cy: 18px;
  r: 2px;
}

.fggvvekwy {
  cx: 12px;
  cy: 18px;
  r: 2px;
}

.k7dqcnbgn {
  d: path("M3.75 2.75h16.5v10H3.75zm4 5h8.5");
}

.u_urt4jrw {
  cx: 5.5px;
  cy: 18px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="k7dqcnbgn"/><circle class="u_urt4jrw"/><circle class="fggvvekwy"/><circle class="aeekdrycf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:conference-sharp"} {...others} />);
}

export default Component;
