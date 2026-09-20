import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.lqpb6twdp {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 72a8 8 0 0 1 16 0v48a32 32 0 0 0 64 0V72a8 8 0 0 1 16 0v48a48 48 0 0 1-96 0Zm96 128H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16");
}
</style><path class="lqpb6twdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-underline-fill"} {...others} />);
}

export default Component;
