import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bkrj1mbdq {
  fill: currentColor;
  d: path("M3.808 19L12 5.885L20.192 19zM5.6 18h12.8L12 7.75zm6.4-5.125");
}
</style><path class="bkrj1mbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:change-history-outline"} {...others} />);
}

export default Component;
