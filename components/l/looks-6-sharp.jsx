import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6kztyquz {
  fill: currentColor;
  d: path("M11 11V9h3V7H9v10h6v-6zm0 2h2v2h-2zm-8 8V3h18v18z");
}
</style><path class="c6kztyquz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-6-sharp"} {...others} />);
}

export default Component;
