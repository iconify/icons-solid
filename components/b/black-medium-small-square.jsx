import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.u287gebsh {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M29 27a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2z");
}
</style><path class="u287gebsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:black-medium-small-square"} {...others} />);
}

export default Component;
