import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k9ya7ibfj {
  d: path("M4 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm11-3a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ss-_aq1an {
  d: path("m6.5 10l4-4h3M13 2.5h2L17.5 7m-15 13.5l13-7l3 7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k9ya7ibfj"/><path class="ss-_aq1an"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:motocross-track"} {...others} />);
}

export default Component;
