import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ks_5tyaxx {
  fill: currentColor;
  d: path("M240 204h-4V88a12 12 0 0 0-12-12h-72a12 12 0 0 0-12 12v36h-24V40a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v164h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24m-76-104h48v104h-48Zm-24 48v56h-24v-56ZM44 52h48v152H44Zm36 24v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m0 48v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m0 48v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0m96 8v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0m0-48v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0");
}
</style><path class="ks_5tyaxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:city-bold"} {...others} />);
}

export default Component;
