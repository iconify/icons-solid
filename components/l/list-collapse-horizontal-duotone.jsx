import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rycj10btr {
  d: path("M6 13V21M12 13V21M18 13V21");
}

.xi2w5nt2z {
  stroke-opacity: 0.4;
  d: path("M3 6H10M7 3L10 6L7 9M21 6H14M17 3L14 6L17 9");
}
</style><g class="nrj6p8qat"><path class="xi2w5nt2z"/><path class="rycj10btr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-collapse-horizontal-duotone"} {...others} />);
}

export default Component;
