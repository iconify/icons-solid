import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fgi612zmg {
  fill: currentColor;
  d: path("M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z");
}

.y_jnmxbvq {
  fill: currentColor;
  d: path("M17 19.22H5V7h7V5H3v16h16v-9h-2z");
}
</style><path class="y_jnmxbvq"/><path class="fgi612zmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-post-add"} {...others} />);
}

export default Component;
