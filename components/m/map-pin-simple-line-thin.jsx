import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o2boujbbo {
  fill: currentColor;
  d: path("M216 212h-84v-80.17a52 52 0 1 0-8 0V212H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M84 80a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44");
}
</style><path class="o2boujbbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:map-pin-simple-line-thin"} {...others} />);
}

export default Component;
