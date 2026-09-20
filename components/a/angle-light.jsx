import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.slnk4abyj {
  fill: currentColor;
  d: path("M98 72a6 6 0 0 1 6-6a102.12 102.12 0 0 1 102 102a6 6 0 0 1-12 0a90.1 90.1 0 0 0-90-90a6 6 0 0 1-6-6m142 122H78V32a6 6 0 0 0-12 0v34H32a6 6 0 0 0 0 12h34v122a6 6 0 0 0 6 6h168a6 6 0 0 0 0-12");
}
</style><path class="slnk4abyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:angle-light"} {...others} />);
}

export default Component;
