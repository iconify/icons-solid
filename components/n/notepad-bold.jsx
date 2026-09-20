import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.exmdccsxc {
  fill: currentColor;
  d: path("M172 124a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 28H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m60-112v160a36 36 0 0 1-36 36H72a36 36 0 0 1-36-36V40a12 12 0 0 1 12-12h24v-4a12 12 0 0 1 24 0v4h20v-4a12 12 0 0 1 24 0v4h20v-4a12 12 0 0 1 24 0v4h24a12 12 0 0 1 12 12m-24 12h-12v4a12 12 0 0 1-24 0v-4h-20v4a12 12 0 0 1-24 0v-4H96v4a12 12 0 0 1-24 0v-4H60v148a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12Z");
}
</style><path class="exmdccsxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notepad-bold"} {...others} />);
}

export default Component;
