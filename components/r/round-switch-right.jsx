import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.js21gfb4z {
  fill: currentColor;
  d: path("M15.5 15.38V8.62L18.88 12zm4.79-2.67a.996.996 0 0 0 0-1.41L15.7 6.71c-.62-.63-1.7-.19-1.7.7v9.17c0 .89 1.08 1.34 1.71.71zM10 16.59V7.41c0-.89-1.08-1.34-1.71-.71L3.7 11.29a.996.996 0 0 0 0 1.41l4.59 4.59c.63.63 1.71.19 1.71-.7");
}
</style><path class="js21gfb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-switch-right"} {...others} />);
}

export default Component;
