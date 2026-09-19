import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7zsrzkeg {
  fill: currentColor;
  d: path("M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-8 15h-2v-2h2zm0-4h-2V8h2zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1");
}
</style><path class="c7zsrzkeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-assignment-late"} {...others} />);
}

export default Component;
