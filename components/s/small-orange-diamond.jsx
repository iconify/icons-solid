import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.rjvq8qjat {
  fill: var(--svg-color--f27a52, #f27a52);
  d: path("m16.019 32l15.98-15.981l15.98 15.98L32 47.98z");
}
</style><path class="rjvq8qjat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:small-orange-diamond"} {...others} />);
}

export default Component;
