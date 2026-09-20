import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xcmpa_bry {
  fill: currentColor;
  d: path("m243.94 92.67l-184-64A12 12 0 0 0 44 40v176a12 12 0 0 0 24 0v-39.47l175.94-61.2a12 12 0 0 0 0-22.66M68 151.12V56.88L203.47 104Z");
}
</style><path class="xcmpa_bry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:flag-pennant-bold"} {...others} />);
}

export default Component;
