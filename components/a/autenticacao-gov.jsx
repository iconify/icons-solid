import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xt63gnvvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 37c-7.18 0-13-5.82-13-13s5.82-13 13-13V2.5C12.126 2.5 2.5 12.126 2.5 24S12.126 45.5 24 45.5zm0-17.794h4.879v4.458a2.44 2.44 0 0 1-4.878 0zm6.879 0h4.878v4.458a2.44 2.44 0 0 1-4.878 0zm0-8.898h4.878v4.458a2.44 2.44 0 0 1-4.878 0zm0 17.795h4.878v4.458a2.44 2.44 0 0 1-4.878 0zm6.878-8.897h4.879v4.458a2.44 2.44 0 0 1-4.878 0z");
}
</style><path class="xt63gnvvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:autenticacao-gov"} {...others} />);
}

export default Component;
