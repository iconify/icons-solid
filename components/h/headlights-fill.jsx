import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.thgq2ybde {
  fill: currentColor;
  d: path("M160 80a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16h-72a8 8 0 0 1-8-8m80 88h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0-64h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 32h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16M128 48H88.9C44.62 48 8.33 83.62 8 127.39A80 80 0 0 0 88 208h40a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16");
}
</style><path class="thgq2ybde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:headlights-fill"} {...others} />);
}

export default Component;
