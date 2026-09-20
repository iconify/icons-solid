import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ntjau44pb {
  fill: currentColor;
  d: path("M238 80v72a6 6 0 0 1-12 0V94.48L124.24 196.24a6 6 0 0 1-8.48 0l-96-96a6 6 0 0 1 8.48-8.48L120 183.51L217.52 86H160a6 6 0 0 1 0-12h72a6 6 0 0 1 6 6");
}
</style><path class="ntjau44pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-right-light"} {...others} />);
}

export default Component;
