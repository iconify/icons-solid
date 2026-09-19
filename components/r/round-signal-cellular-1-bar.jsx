import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ld-sdrbtn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M4.41 22H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71");
}

.m80dp4bzj {
  fill: currentColor;
  d: path("m12 12l-8.29 8.29c-.63.63-.19 1.71.7 1.71H12z");
}
</style><path class="ld-sdrbtn"/><path class="m80dp4bzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-signal-cellular-1-bar"} {...others} />);
}

export default Component;
