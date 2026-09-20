import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zlph2zydo {
  fill: currentColor;
  d: path("M15.577 20H4V4h16v11.577zM15 19l4-4h-4zm-3.5-3.5h1v-6h3v-1h-7v1h3z");
}
</style><path class="zlph2zydo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sticky-note-sharp"} {...others} />);
}

export default Component;
