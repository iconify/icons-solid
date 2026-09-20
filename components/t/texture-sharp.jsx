import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c82xd1btj {
  fill: currentColor;
  d: path("M4.19 19.81v-.708L19.103 4.19h.714v.708L4.898 19.81zM4 13.526v-1.415L12.111 4h1.416zm0-7.18V4h2.346zM17.654 20L20 17.654V20zm-7.181 0L20 10.473v1.416L11.889 20z");
}
</style><path class="c82xd1btj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:texture-sharp"} {...others} />);
}

export default Component;
