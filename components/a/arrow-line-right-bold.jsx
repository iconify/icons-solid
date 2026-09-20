import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.oggcbnfev {
  fill: currentColor;
  d: path("M184.49 119.51a12 12 0 0 1 0 17l-72 72a12 12 0 0 1-17-17L147 140H32a12 12 0 0 1 0-24h115L95.51 64.49a12 12 0 0 1 17-17ZM216 28a12 12 0 0 0-12 12v176a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12");
}
</style><path class="oggcbnfev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-right-bold"} {...others} />);
}

export default Component;
