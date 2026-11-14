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

.vnzf44b0e {
  d: path("M7.75 9.75H7a2.25 2.25 0 0 0 0 4.5h.75m2.5-4.5H11a2.25 2.25 0 0 1 0 4.5h-.75M7.75 12h2.5m5.25 0h3");
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="vnzf44b0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:input-url"} {...others} />);
}

export default Component;
