import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.drcco5bzl {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-10.61 161.92l62-50.55a36 36 0 1 0-51.14-50.23l-43 52.73L45.28 98A88 88 0 1 1 40 128a90 90 0 0 1 .8-11.88l34.57 34.57a28 28 0 0 0 42 35.23Zm4.19-67.37a36.18 36.18 0 0 0 23.87 23.87l-18.26 14.89a28.11 28.11 0 0 0-20.5-20.5ZM156 128a20 20 0 1 1 20-20a20 20 0 0 1-20 20m-56 24a12 12 0 1 1-12 12a12 12 0 0 1 12-12");
}
</style><path class="drcco5bzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:steam-logo"} {...others} />);
}

export default Component;
