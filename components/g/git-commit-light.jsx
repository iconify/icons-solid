import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mosi2bbui {
  fill: currentColor;
  d: path("M248 122h-66.34a54 54 0 0 0-107.32 0H8a6 6 0 0 0 0 12h66.34a54 54 0 0 0 107.32 0H248a6 6 0 0 0 0-12m-120 48a42 42 0 1 1 42-42a42 42 0 0 1-42 42");
}
</style><path class="mosi2bbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:git-commit-light"} {...others} />);
}

export default Component;
