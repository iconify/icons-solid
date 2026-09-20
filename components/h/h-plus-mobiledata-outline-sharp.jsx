import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u-kve-brd {
  fill: currentColor;
  d: path("M4.616 17V7h1v4.5h7V7h1v10h-1v-4.5h-7V17zm13.769-2.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="u-kve-brd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:h-plus-mobiledata-outline-sharp"} {...others} />);
}

export default Component;
