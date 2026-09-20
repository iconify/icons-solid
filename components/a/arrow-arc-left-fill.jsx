import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.yu24z9bil {
  fill: currentColor;
  d: path("M232 184a8 8 0 0 1-16 0a88 88 0 0 0-148.53-63.84l26.19 26.18A8 8 0 0 1 88 160H24a8 8 0 0 1-8-8V88a8 8 0 0 1 13.66-5.66l26.48 26.48A104 104 0 0 1 232 184");
}
</style><path class="yu24z9bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-arc-left-fill"} {...others} />);
}

export default Component;
