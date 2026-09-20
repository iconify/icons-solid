import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vqwc5httt {
  fill: currentColor;
  d: path("M13 9V7h3V3h2v4h3v2zm3 12V11h2v10zM6 21v-4H3v-2h8v2H8v4zm0-8V3h2v10z");
}
</style><path class="vqwc5httt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:discover-tune-outline"} {...others} />);
}

export default Component;
