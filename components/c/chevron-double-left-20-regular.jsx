import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.tfmas8sdw {
  fill: currentColor;
  d: path("M9.646 4.146a.5.5 0 1 1 .707.708L5.208 10l5.147 5.147a.5.5 0 1 1-.708.707l-5.5-5.5a.5.5 0 0 1 0-.708zm5 0a.5.5 0 1 1 .707.708L10.208 10l5.147 5.147a.5.5 0 1 1-.707.707l-5.5-5.5a.5.5 0 0 1 0-.708z");
}
</style><path class="tfmas8sdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-double-left-20-regular"} {...others} />);
}

export default Component;
