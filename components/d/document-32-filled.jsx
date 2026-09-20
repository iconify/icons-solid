import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.vfp3g8bwm {
  fill: currentColor;
  d: path("M16 2H8.25A3.25 3.25 0 0 0 5 5.25v21.5A3.25 3.25 0 0 0 8.25 30h15.5A3.25 3.25 0 0 0 27 26.75V13h-7.75A3.25 3.25 0 0 1 16 9.75zm10.863 9a3.25 3.25 0 0 0-.815-1.366l-6.682-6.682A3.25 3.25 0 0 0 18 2.136V9.75c0 .69.56 1.25 1.25 1.25z");
}
</style><path class="vfp3g8bwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-32-filled"} {...others} />);
}

export default Component;
