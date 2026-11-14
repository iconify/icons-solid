import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jqonfzbeg {
  d: path("M3 6.75L11 11l8-4.25M11 11v9m4-2a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.m13evjbvm {
  d: path("M12.34 19.288L11 20l-8-4.25v-9l8-4.25l8 4.25v5.541");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m13evjbvm"/><path class="jqonfzbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:design-right"} {...others} />);
}

export default Component;
