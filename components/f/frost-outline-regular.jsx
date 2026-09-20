import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.dgfbh6b4z {
  d: path("M12 9v9");
}

.nhpfz0btj {
  d: path("M17 7.5v7m-3.5 0 7 -7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rbmqb921v {
  d: path("M7 7.5v7m-3.5 0 7 -7");
}
</style><g class="nrj6p8qat"><path class="bod4n0b3z"/><path class="rbmqb921v"/><path class="nhpfz0btj"/><path class="dgfbh6b4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:frost-outline-regular"} {...others} />);
}

export default Component;
