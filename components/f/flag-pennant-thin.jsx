import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fbshizb6u {
  fill: currentColor;
  d: path("m241.31 100.22l-184-64A4 4 0 0 0 52 40v176a4 4 0 0 0 8 0v-45.16l181.31-63.06a4 4 0 0 0 0-7.56M60 162.37V45.63L227.82 104Z");
}
</style><path class="fbshizb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:flag-pennant-thin"} {...others} />);
}

export default Component;
