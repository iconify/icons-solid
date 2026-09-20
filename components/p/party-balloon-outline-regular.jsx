import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9x5rubht {
  d: path("M12 16c0 2 2 3 1 5");
}

.emoq9e-ad {
  d: path("M12 4c3.5 0 6 2.5 6 6s-2.5 6 -6 6 -6 -2.5 -6 -6 2.5 -6 6 -6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="emoq9e-ad"/><path class="c9x5rubht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:party-balloon-outline-regular"} {...others} />);
}

export default Component;
