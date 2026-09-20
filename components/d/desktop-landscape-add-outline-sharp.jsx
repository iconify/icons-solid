import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipkv3faex {
  fill: currentColor;
  d: path("M4 18V6zm2-2v-5h9v5zm-4 4V4h20v8h-2V6H4v12h9v2zm14.5-8V9.5H9V8h9v4zM18 22v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="ipkv3faex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:desktop-landscape-add-outline-sharp"} {...others} />);
}

export default Component;
