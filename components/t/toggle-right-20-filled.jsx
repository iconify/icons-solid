import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.zrokgqbld {
  fill: currentColor;
  d: path("M6 6a4 4 0 1 0 0 8h8a4 4 0 0 0 0-8zm8 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4");
}
</style><path class="zrokgqbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toggle-right-20-filled"} {...others} />);
}

export default Component;
