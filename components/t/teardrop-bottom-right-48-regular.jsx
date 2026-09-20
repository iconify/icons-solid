import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.quqil3bdw {
  fill: currentColor;
  d: path("M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20v15.75A4.25 4.25 0 0 1 39.75 44H24C12.954 44 4 35.046 4 24M24 6.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5h15.75a1.75 1.75 0 0 0 1.75-1.75V24c0-9.665-7.835-17.5-17.5-17.5");
}
</style><path class="quqil3bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:teardrop-bottom-right-48-regular"} {...others} />);
}

export default Component;
