import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tg-714opg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25v17.5m-4 0h8M6 6h12M3.5 13.25L6 6l2.5 7.25m7 0L18 6l2.5 7.25m-17.5 0h6a3 2.5 0 0 1-6 0m12 0h6a3 2.5 0 0 1-6 0");
}
</style><path class="tg-714opg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fairness-balance"} {...others} />);
}

export default Component;
