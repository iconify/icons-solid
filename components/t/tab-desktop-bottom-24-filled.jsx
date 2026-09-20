import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rbyyi6xqy {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H14.5v-3.25a2.25 2.25 0 0 0-2.25-2.25H3zM3 17v.75A3.25 3.25 0 0 0 6.25 21H13v-3.25a.75.75 0 0 0-.75-.75z");
}
</style><path class="rbyyi6xqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tab-desktop-bottom-24-filled"} {...others} />);
}

export default Component;
