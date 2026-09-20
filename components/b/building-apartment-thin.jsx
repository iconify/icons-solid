import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d9d5dz74r {
  fill: currentColor;
  d: path("M240 212h-12V72a4 4 0 0 0-4-4h-44V40a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v60H32a4 4 0 0 0-4 4v108H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8M36 108h44a4 4 0 0 0 4-4V44h88v28a4 4 0 0 0 4 4h44v136h-72v-44a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v44H36Zm104 104h-24v-40h24ZM116 72a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m56 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m-88 32a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m0 32a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h16a4 4 0 0 1 4 4m32-32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m56 0a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4m0 32a4 4 0 0 1 4-4h16a4 4 0 0 1 0 8h-16a4 4 0 0 1-4-4");
}
</style><path class="d9d5dz74r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:building-apartment-thin"} {...others} />);
}

export default Component;
