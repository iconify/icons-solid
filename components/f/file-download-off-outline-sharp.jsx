import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l1qh6cc3r {
  fill: currentColor;
  d: path("M19.775 22.625L17.15 20H4v-5h2v3h9.15l-2.575-2.575L12 16l-5-5l.575-.575l-6.2-6.2L2.8 2.8l18.4 18.4zm-4.35-10.05L14 11.15l1.6-1.6L17 11zM13 10.15l-2-2V4h2zm7 7l-2-2V15h2z");
}
</style><path class="l1qh6cc3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:file-download-off-outline-sharp"} {...others} />);
}

export default Component;
