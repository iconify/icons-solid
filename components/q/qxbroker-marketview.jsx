import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qiox6h2py {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.606 8.623l8.014 4.627v21.5L24 45.5L5.38 34.75v-21.5l8.014-4.627m2.594-1.497L24 2.5h0l8.014 4.627M24 2.5v43m-12.413-7.167V20.416m6.206 21.501V16.834m18.62 21.499V20.416m-6.206 21.501V16.834");
}
</style><path class="qiox6h2py"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:qxbroker-marketview"} {...others} />);
}

export default Component;
