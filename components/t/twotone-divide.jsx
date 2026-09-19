import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bskgigbvq {
  fill: currentColor;
  d: path("M3 11h18v2H3z");
}

.csn7xgb_l {
  cx: 12px;
  cy: 6px;
  r: 1px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}

.iw7fxbbub {
  fill: currentColor;
  d: path("M12.003 3a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6M12 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m.003 10a3 3 0 1 1-.006 6a3 3 0 0 1 .006-6M12 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2");
}

.ka0uewbks {
  cx: 12px;
  cy: 18px;
  r: 1px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="bskgigbvq"/><circle class="csn7xgb_l"/><circle class="ka0uewbks"/><path class="iw7fxbbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-divide"} {...others} />);
}

export default Component;
