import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rmcjynfuc {
  d: path("M10 2.5h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm-2 4h2M8 10h2m4-3.5h2M14 10h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvz_7pbbi {
  d: path("M4.5 11.5a7.5 7.5 0 0 0 15 0M12 19v2.5");
}
</style><g class="ulnmmdpxh"><path class="rmcjynfuc"/><path class="uvz_7pbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:microphone-lines"} {...others} />);
}

export default Component;
