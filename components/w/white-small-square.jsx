import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.lb8zidj-m {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M25 24a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z");
}
</style><path class="lb8zidj-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:white-small-square"} {...others} />);
}

export default Component;
