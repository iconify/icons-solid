import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b641smb7p {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm1-12.5L9.75 9m7.75-6.5L14.25 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uw0qjczhi {
  d: path("m12 11.75l.75 2.25l2.5.25l-1.75 1.5L14 18l-2-1.25L10 18l.5-2.25l-1.75-1.5l2.5-.25Z");
}
</style><g class="ulnmmdpxh"><path class="b641smb7p"/><path class="uw0qjczhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:medal-gold-sport"} {...others} />);
}

export default Component;
