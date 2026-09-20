import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.ky2rktbfr {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M98.89 36.51c1.23 0 2.24-1 2.24-2.24V17.55c0-1.24-1.01-2.24-2.24-2.24H29.1c-1.24 0-2.24 1-2.24 2.24v100.97c0 1.24 1 2.24 2.24 2.24h69.8c1.23 0 2.24-1 2.24-2.24V101.8c0-1.24-1.01-2.24-2.24-2.24H53.24V77.51h35.12c1.23 0 2.24-1 2.24-2.24V58.55c0-1.24-1.01-2.24-2.24-2.24H53.24v-19.8z");
}
</style><path class="ky2rktbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto:letter-e"} {...others} />);
}

export default Component;
