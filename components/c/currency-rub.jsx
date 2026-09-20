import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fnic__bjf {
  fill: currentColor;
  d: path("M148 152a60 60 0 0 0 0-120H88a8 8 0 0 0-8 8v96H56a8 8 0 0 0 0 16h24v16H56a8 8 0 0 0 0 16h24v32a8 8 0 0 0 16 0v-32h48a8 8 0 0 0 0-16H96v-16ZM96 48h52a44 44 0 0 1 0 88H96Z");
}
</style><path class="fnic__bjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-rub"} {...others} />);
}

export default Component;
