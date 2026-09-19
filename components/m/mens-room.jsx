import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.n11damojh {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32c0 16.566 13.432 30 30 30s30-13.434 30-30C62 15.432 48.568 2 32 2m-4 13c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1-1 2-2 1.998h-4C29 21 28 20 28 19zm10 21l-1-9l-1 24h-3l-1-13l-1 13h-3l-1-24l-1 9h-3l1-11c0-1 1-2 2-2h12c1 0 2 1 2 2l1 11z");
}
</style><path class="n11damojh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:mens-room"} {...others} />);
}

export default Component;
