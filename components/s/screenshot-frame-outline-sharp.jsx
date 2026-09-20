import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i1fk8ibfw {
  fill: currentColor;
  d: path("M6 7V3h4v1H7v3zm0 14v-4h1v3h3v1zM17 7V4h-3V3h4v4zm-3 14v-1h3v-3h1v4z");
}
</style><path class="i1fk8ibfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:screenshot-frame-outline-sharp"} {...others} />);
}

export default Component;
