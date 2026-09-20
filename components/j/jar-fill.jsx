import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gryctabpx {
  fill: currentColor;
  d: path("M184 48.81V32a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v16.81A40.05 40.05 0 0 0 40 88v112a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40V88a40.05 40.05 0 0 0-32-39.19M120 48V32h16v16Zm48 0h-16V32h16Zm-64-16v16H88V32Z");
}
</style><path class="gryctabpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:jar-fill"} {...others} />);
}

export default Component;
