import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vgupxabhb {
  fill: currentColor;
  d: path("M216 172h-12.64L180.77 44H192a4 4 0 0 0 0-8H64a4 4 0 0 0 0 8h11.23L52.64 172H40a4 4 0 0 0 0 8h84v60a4 4 0 0 0 8 0v-60h84a4 4 0 0 0 0-8M83.36 44h89.28l22.59 128H60.77Z");
}
</style><path class="vgupxabhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:push-pin-simple-thin"} {...others} />);
}

export default Component;
