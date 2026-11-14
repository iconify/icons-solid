import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.erlbpacbz {
  d: path("M6 6.5h12V9H6ZM6 12h3.25M6 14.75h3.25M6 17.5h2.25m6.5-5.5H18m-3.25 2.75H18m-3.25 2.75H17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ya4wpcb5c {
  d: path("M3 3.5h18v17H3Zm9 8.25v8.75");
}
</style><g class="ulnmmdpxh"><path class="ya4wpcb5c"/><path class="erlbpacbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:company-newsletter"} {...others} />);
}

export default Component;
