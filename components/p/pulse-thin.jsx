import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o9pk0lb5v {
  fill: currentColor;
  d: path("M236 128a4 4 0 0 1-4 4h-29.53l-38.89 77.79A4 4 0 0 1 160 212h-.2a4 4 0 0 1-3.54-2.58l-60.59-159l-36 79.28A4 4 0 0 1 56 132H24a4 4 0 0 1 0-8h29.42l38.94-85.65a4 4 0 0 1 7.38.23l60.76 159.48l35.92-71.85A4 4 0 0 1 200 124h32a4 4 0 0 1 4 4");
}
</style><path class="o9pk0lb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:pulse-thin"} {...others} />);
}

export default Component;
