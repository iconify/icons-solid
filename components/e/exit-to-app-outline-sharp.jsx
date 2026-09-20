import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hvk01sb6m {
  fill: currentColor;
  d: path("M4 20v-4.73h1V19h14V5H5v3.73H4V4h16v16zm6.846-4.077l-.707-.72l2.703-2.703H4v-1h8.842L10.14 8.796l.707-.719L14.77 12z");
}
</style><path class="hvk01sb6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:exit-to-app-outline-sharp"} {...others} />);
}

export default Component;
