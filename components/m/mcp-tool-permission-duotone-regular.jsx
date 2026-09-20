import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcrnhlesv {
  d: path("M12 10h3a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3v-4l3 -3Z");
}

.hr-ubj4jo {
  fill: currentColor;
  d: path("M12 10h3a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3v-4l3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ltriwmbuu {
  d: path("M8 10a4 4 0 0 1 8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hr-ubj4jo"/><path class="gcrnhlesv"/><path class="ltriwmbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mcp-tool-permission-duotone-regular"} {...others} />);
}

export default Component;
