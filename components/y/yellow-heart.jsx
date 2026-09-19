import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.v-y8tkbpg {
  fill: var(--svg-color--f5ce3e, #f5ce3e);
  d: path("M61.1 18.2c-6.4-17-27.2-9.4-29.1-.9c-2.6-9-22.9-15.7-29.1.9C-4 36.7 29.6 53.3 32 56c2.4-2.2 36-19.6 29.1-37.8");
}
</style><path class="v-y8tkbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:yellow-heart"} {...others} />);
}

export default Component;
