import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qwsrrqbhm {
  fill: currentColor;
  d: path("M6.7 17.308L1.742 12.35l.714-.708l4.25 4.25l.692-.692l.708.708zm5.65 0L7.392 12.35l.708-.713l4.25 4.25l9.2-9.2l.708.713zm-.692-4.958l-.714-.708l4.95-4.95l.714.708z");
}
</style><path class="qwsrrqbhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:done-all-outline"} {...others} />);
}

export default Component;
