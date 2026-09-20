import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.c11ae2beh {
  cx: 16px;
  cy: 16px;
  fill: none;
  stroke: var(--svg-color--fff, #fff);
  rx: 10.72px;
  ry: 4.1px;
}

.kycnyrzku {
  cx: 16px;
  cy: 16px;
  fill: none;
  stroke: var(--svg-color--fff, #fff);
  rx: 4.1px;
  ry: 10.72px;
}

.lowvkw5lw {
  cx: 16px;
  cy: 16px;
  r: 1.86px;
  fill: var(--svg-color--fff, #fff);
}

.phg1nd_pu {
  fill: var(--svg-color--673ab8, #673ab8);
  d: path("m16 2l12.12 7v14L16 30L3.88 23V9z");
}
</style><path class="phg1nd_pu"/><ellipse transform="rotate(-37.5 16.007 15.996)" class="c11ae2beh"/><ellipse transform="rotate(-52.5 15.998 15.994)" class="kycnyrzku"/><circle class="lowvkw5lw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-preact"} {...others} />);
}

export default Component;
