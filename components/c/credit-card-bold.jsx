import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zsu0utb3w {
  fill: currentColor;
  d: path("M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 24v20H36V68ZM36 188v-76h184v76Zm172-24a12 12 0 0 1-12 12h-32a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12m-68 0a12 12 0 0 1-12 12h-12a12 12 0 0 1 0-24h12a12 12 0 0 1 12 12");
}
</style><path class="zsu0utb3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:credit-card-bold"} {...others} />);
}

export default Component;
