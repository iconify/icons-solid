import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.l2dwcgbby {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M101.15 15.54H34.86c-1.23 0-2.24 1-2.24 2.24v100.97c0 1.24 1.01 2.24 2.24 2.24h21.89c1.24 0 2.24-1 2.24-2.24v-44H94.1c1.24 0 2.24-1 2.24-2.24V55.79c0-1.24-1-2.24-2.24-2.24H58.99v-16.8h42.16c1.24 0 2.24-1 2.24-2.24V17.78c0-1.24-1-2.24-2.24-2.24");
}
</style><path class="l2dwcgbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:letter-f"} {...others} />);
}

export default Component;
