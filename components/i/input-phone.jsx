import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.em4j34a7u {
  d: path("M2.5 6h19v12h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y5w0_3f-g {
  d: path("M5 9h1.5l.75 2l-1 .75c.5 1 1 1.5 2 2l.75-1l2 .75V15c0 .5-.5 1-1 1c-3 0-5.5-2.5-5.5-6c0-.5.1-1 .5-1Zm9 3h4.5");
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="y5w0_3f-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:input-phone"} {...others} />);
}

export default Component;
