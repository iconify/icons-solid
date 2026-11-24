import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nbbsvrbsx {
  stroke-opacity: 0.4;
  d: path("M4 13h8m-8 4h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yl1ox_bbt {
  d: path("M4 21V8a4 4 0 1 1 8 0v13m-9 0h18M12 8l8 4v9");
}
</style><g class="nrj6p8qat"><path class="nbbsvrbsx"/><path class="yl1ox_bbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:silo-duocolor-sharp"} {...others} />);
}

export default Component;
