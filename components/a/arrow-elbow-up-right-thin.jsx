import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nd5c-2b8q {
  fill: currentColor;
  d: path("m218.83 82.83l-48 48a4 4 0 0 1-5.66-5.66L206.34 84H76v140a4 4 0 0 1-8 0V80a4 4 0 0 1 4-4h134.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66");
}
</style><path class="nd5c-2b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-up-right-thin"} {...others} />);
}

export default Component;
