import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n0l1q7b6f {
  cx: 12px;
  cy: 17px;
  r: 4px;
  fill: currentColor;
}

.ugmv2gidu {
  fill: currentColor;
  d: path("M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 5-2.08");
}
</style><circle class="n0l1q7b6f"/><path class="ugmv2gidu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-compass-calibration"} {...others} />);
}

export default Component;
