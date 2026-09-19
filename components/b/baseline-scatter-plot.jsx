import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ap76noi5m {
  cx: 11px;
  cy: 6px;
  r: 3px;
  fill: currentColor;
}

.sjg9j274c {
  cx: 16.6px;
  cy: 17.6px;
  r: 3px;
  fill: currentColor;
}

.yg3x3ublv {
  cx: 7px;
  cy: 14px;
  r: 3px;
  fill: currentColor;
}
</style><circle class="yg3x3ublv"/><circle class="ap76noi5m"/><circle class="sjg9j274c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-scatter-plot"} {...others} />);
}

export default Component;
