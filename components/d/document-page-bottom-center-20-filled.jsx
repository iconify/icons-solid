import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ohglwrban {
  fill: currentColor;
  d: path("m10.753 13.502l-.22 1.5H9.295l.22-1.5zM5.5 2A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 14.5 2zm2.572 14.444l.065-.442H7.5a.5.5 0 0 1 0-1h.784l.22-1.5H8a.5.5 0 0 1 0-1h.65l.157-1.074a.5.5 0 0 1 .99.144l-.137.93h1.24l.157-1.074a.5.5 0 0 1 .99.144l-.136.93h.589a.5.5 0 0 1 0 1h-.736l-.22 1.5H12a.5.5 0 0 1 0 1h-.602l-.086.587a.5.5 0 0 1-.99-.145l.065-.442h-1.24l-.085.587a.5.5 0 0 1-.99-.145");
}
</style><path class="ohglwrban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-page-bottom-center-20-filled"} {...others} />);
}

export default Component;
