import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iaz-f2bmm {
  d: path("M3 17.5h18M3 15v5m18-5v5M6.5 9a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Z");
}

.q5udl2jej {
  d: path("M13.5 7.25c0-.75-.75-1-1.5-1c-1 0-1.5.5-1.5 1.25c0 1.5 3 1 3 3c0 .75-.5 1.25-1.5 1.25c-.75 0-1.5-.5-1.5-1m1.5-5.5v1m0 5.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iaz-f2bmm"/><path class="q5udl2jej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:loan-term-loan"} {...others} />);
}

export default Component;
