import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v4tlo-x5n {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-48 152H64a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m32-32H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16M56 112a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m136-24H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16");
}
</style><path class="v4tlo-x5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-align-left-fill"} {...others} />);
}

export default Component;
