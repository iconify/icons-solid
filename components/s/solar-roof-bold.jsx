import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.lck5_8bba {
  fill: currentColor;
  d: path("m250.73 122.63l-40-80A12 12 0 0 0 200 36H56a12 12 0 0 0-10.73 6.63l-40 80A12 12 0 0 0 4 128v56a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20v-56a12 12 0 0 0-1.27-5.37M96.58 60l8 16H83.42l-8-16Zm48 0l8 16h-21.16l-8-16Zm-41.16 56l-8-16h21.16l8 16Zm48 0l-8-16h21.16l8 16Zm48 0l-8-16h21.16l8 16Zm1.16-40h-21.16l-8-16h21.16ZM28 130.83l28-56l28 56V180H28ZM108 180v-40h120v40Z");
}
</style><path class="lck5_8bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:solar-roof-bold"} {...others} />);
}

export default Component;
