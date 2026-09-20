import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wwt1zxbjc {
  fill: currentColor;
  d: path("M2 20L12 4l10 16zm3.6-2h12.8L12 7.75zm6.4-5.125");
}
</style><path class="wwt1zxbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:change-history-outline-sharp"} {...others} />);
}

export default Component;
