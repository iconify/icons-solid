import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fsd0axbji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.15 24.053a9.563 9.563 0 0 1 4.218-12.356m4.53 24.678V43.4m-8.788.1h17.374");
}

.niddxibvm {
  cx: 24px;
  cy: 20.438px;
  r: 15.938px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="niddxibvm"/><path class="fsd0axbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:huawei-mirror"} {...others} />);
}

export default Component;
