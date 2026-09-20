import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ket8y5bbl {
  fill: currentColor;
  d: path("M90 48V16a6 6 0 0 1 12 0v32a6 6 0 0 1-12 0m38 6a6 6 0 0 0 6-6V16a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m32 0a6 6 0 0 0 6-6V16a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6m91.6 46.8L222 123v61a30 30 0 0 1-30 30H64a30 30 0 0 1-30-30v-61L4.4 100.8a6 6 0 0 1 7.2-9.6L34 108V80a6 6 0 0 1 6-6h176a6 6 0 0 1 6 6v28l22.4-16.8a6 6 0 0 1 7.2 9.6M210 86H46v98a18 18 0 0 0 18 18h128a18 18 0 0 0 18-18Z");
}
</style><path class="ket8y5bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cooking-pot-light"} {...others} />);
}

export default Component;
