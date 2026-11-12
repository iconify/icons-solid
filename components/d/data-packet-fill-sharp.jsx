import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9kg02b7m {
  fill: currentColor;
  d: path("M22 8H8V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1ZM5 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm17 3v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-9ZM5 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm9 2a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm4 3v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0M5 15a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="s9kg02b7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:data-packet-fill-sharp"} {...others} />);
}

export default Component;
