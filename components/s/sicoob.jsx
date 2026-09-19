import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uiheizesp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.239 41.164L5.127 9.848a.945.945 0 0 1 .815-1.42l36.113-.063a.945.945 0 0 1 .82 1.416l-18.002 31.38a.942.942 0 0 1-1.633.003Z");
}

.yxqjyfhtk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.369 22.074l-8.742.083l4.3-7.632Zm-4.441-7.557L20.463 8.47m-.823 13.685l-3.638 6.307m12.372-6.384h7.16");
}
</style><path class="uiheizesp"/><path class="yxqjyfhtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sicoob"} {...others} />);
}

export default Component;
