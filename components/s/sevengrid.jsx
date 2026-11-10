import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c8u1cb1my {
  cx: 5.55px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.fbkj-abpi {
  cx: 30.15px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.lnmhwmbyt {
  cx: 17.85px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.pc7tgcc6w {
  cx: 11.7px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.trzyf1bvn {
  cx: 24px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.vqjuabc6x {
  cx: 36.3px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}

.vxzeikb7s {
  cx: 42.45px;
  cy: 24px;
  r: 2.05px;
  fill: none;
  stroke: currentColor;
}
</style><circle class="c8u1cb1my"/><circle class="pc7tgcc6w"/><circle class="lnmhwmbyt"/><circle class="trzyf1bvn"/><circle class="fbkj-abpi"/><circle class="vqjuabc6x"/><circle class="vxzeikb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sevengrid"} {...others} />);
}

export default Component;
