import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.caije0w_t {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-28.65 136.74a8 8 0 1 1-6.7 14.52l-104-48a8 8 0 0 1 0-14.52l104-48a8 8 0 0 1 6.7 14.52L91.09 128Z");
}
</style><path class="caije0w_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:less-than-fill"} {...others} />);
}

export default Component;
