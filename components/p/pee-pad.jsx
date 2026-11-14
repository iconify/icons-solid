import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xumgsos_e {
  d: path("M12 7.75S9 11.25 9 13a3 3 0 0 0 6 0c0-1.75-3-5.25-3-5.25Z");
}

.y94b542ap {
  d: path("M6 5h15.5L18 19H2.5Z");
}
</style><g class="ulnmmdpxh"><path class="y94b542ap"/><path class="xumgsos_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pee-pad"} {...others} />);
}

export default Component;
