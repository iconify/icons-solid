import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gx2y6ut7s {
  fill: currentColor;
  d: path("M164 28H92a28 28 0 0 0-28 28v144a28 28 0 0 0 28 28h72a28 28 0 0 0 28-28V56a28 28 0 0 0-28-28m4 172a4 4 0 0 1-4 4H92a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4Zm64-100v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0m-184 0v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0");
}
</style><path class="gx2y6ut7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:vibrate-bold"} {...others} />);
}

export default Component;
