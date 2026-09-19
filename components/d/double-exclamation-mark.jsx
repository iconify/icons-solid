import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.f3fxo95gg {
  cx: 17.999px;
  cy: 54.354px;
  fill: currentColor;
  rx: 7.663px;
  ry: 7.646px;
}

.ikm6qhd-m {
  fill: currentColor;
  d: path("M22.989 42.439H13.01L9 2h18z");
}

.j8re6-bct {
  cx: 45.999px;
  cy: 54.354px;
  fill: currentColor;
  rx: 7.663px;
  ry: 7.646px;
}

.u5j61ybjh {
  fill: currentColor;
  d: path("M50.989 42.439H41.01L37 2h18z");
}
</style><path class="ikm6qhd-m"/><ellipse class="f3fxo95gg"/><path class="u5j61ybjh"/><ellipse class="j8re6-bct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:double-exclamation-mark"} {...others} />);
}

export default Component;
