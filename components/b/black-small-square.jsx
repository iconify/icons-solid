import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.t1-2mybuz {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M25 24a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z");
}
</style><path class="t1-2mybuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:black-small-square"} {...others} />);
}

export default Component;
