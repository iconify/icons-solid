import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hko8__x9a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 19V6l-1-1h9v12h-6ZM3 5h9l-1 1v13l-2-2H3Z");
}

.p9q6gobzb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20V5h9v12h-6zm0 0V5H3v12h6z");
}
</style><g class="ft5dv1b6b"><path class="hko8__x9a"/><path class="p9q6gobzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:book-open-duotone-sharp"} {...others} />);
}

export default Component;
