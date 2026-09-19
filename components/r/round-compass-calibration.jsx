import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aa47e6baz {
  fill: currentColor;
  d: path("M12 3C8.49 3 5.28 4.29 2.8 6.41a1.01 1.01 0 0 0-.06 1.48l3.6 3.6c.36.36.92.39 1.32.08c1.2-.94 2.71-1.5 4.34-1.5c1.64 0 3.14.56 4.34 1.49c.4.31.96.28 1.31-.08l3.6-3.6c.42-.42.38-1.1-.07-1.48C18.72 4.28 15.51 3 12 3");
}

.n0l1q7b6f {
  cx: 12px;
  cy: 17px;
  r: 4px;
  fill: currentColor;
}
</style><circle class="n0l1q7b6f"/><path class="aa47e6baz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-compass-calibration"} {...others} />);
}

export default Component;
