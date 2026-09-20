import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.i02_mn6da {
  fill: currentColor;
  d: path("M240 188h-4v-28a12 12 0 0 0-12-12h-64a12 12 0 0 0-12 12v28H44V60h168v60a12 12 0 0 0 24 0V56a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v132h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-68-16h40v16h-40Z");
}
</style><path class="i02_mn6da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chalkboard-simple-bold"} {...others} />);
}

export default Component;
