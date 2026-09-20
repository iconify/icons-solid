import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ua6rdg9cm {
  fill: currentColor;
  d: path("M140 48v160a4 4 0 0 1-8 0V55.06L98.06 75.43a4 4 0 0 1-4.12-6.86l40-24A4 4 0 0 1 140 48");
}
</style><path class="ua6rdg9cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-one-thin"} {...others} />);
}

export default Component;
