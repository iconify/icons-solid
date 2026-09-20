import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avsermgoo {
  d: path("M6 20v-9a6 6 0 0 1 12 0v9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.utl7yebdg {
  d: path("m15 17 3 3 3 -3");
}
</style><g class="nrj6p8qat"><path class="avsermgoo"/><path class="utl7yebdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:u-turn-outline-regular"} {...others} />);
}

export default Component;
