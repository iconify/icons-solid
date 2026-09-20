import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o32ra1bws {
  fill: currentColor;
  d: path("M9 21V3h2v18zm4-4V7l5 5z");
}
</style><path class="o32ra1bws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-menu-open"} {...others} />);
}

export default Component;
