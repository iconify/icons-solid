import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dr7u0qfey {
  fill: currentColor;
  d: path("M174 160a54 54 0 0 1-90 40.25a6 6 0 1 1 8-8.94A42 42 0 1 0 120 118a6 6 0 0 1-4.8-9.6L156 54H88a6 6 0 0 1 0-12h80a6 6 0 0 1 4.8 9.6l-41.67 55.55A54.1 54.1 0 0 1 174 160");
}
</style><path class="dr7u0qfey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-three-light"} {...others} />);
}

export default Component;
