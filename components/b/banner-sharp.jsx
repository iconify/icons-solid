import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a81qvikhv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.5h18.5v11H2.75zM7 9.5v3");
}

.ekpyzob7n {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 12h7.25");
}

.q_nfnc6mi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 15h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="a81qvikhv"/><path class="q_nfnc6mi"/><path class="ekpyzob7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:banner-sharp"} {...others} />);
}

export default Component;
