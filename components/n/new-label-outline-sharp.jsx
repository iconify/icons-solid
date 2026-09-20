import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nv5mnbbwo {
  fill: currentColor;
  d: path("M12.27 19v-1h2.865l4.615-6l-4.615-6H4v4.616H3V5h12.635L21 12l-5.365 7zm-6.385 1v-3h-3v-1h3v-3h1v3h3v1h-3v3z");
}
</style><path class="nv5mnbbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:new-label-outline-sharp"} {...others} />);
}

export default Component;
