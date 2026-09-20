import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xa9ksnb0y {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-64h-8V80a8 8 0 0 0-14.31-4.91l-56 72A8 8 0 0 0 88 160h48v16a8 8 0 0 0 16 0v-16h8a8 8 0 0 0 0-16m-24 0h-31.64L136 103.32Z");
}
</style><path class="xa9ksnb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-square-four"} {...others} />);
}

export default Component;
