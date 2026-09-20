import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ijfk71fus {
  fill: currentColor;
  d: path("M74.34 173.66a8 8 0 0 1 0-11.32L132.69 104L90.34 61.66A8 8 0 0 1 96 48h96a8 8 0 0 1 8 8v96a8 8 0 0 1-13.66 5.66L144 115.31l-58.34 58.35a8 8 0 0 1-11.32 0M216 208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16");
}
</style><path class="ijfk71fus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-up-right-fill"} {...others} />);
}

export default Component;
