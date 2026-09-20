import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wnnbb8hlj {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v12h-6v-7h-4v7z");
}
</style><path class="wnnbb8hlj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:home-sharp"} {...others} />);
}

export default Component;
