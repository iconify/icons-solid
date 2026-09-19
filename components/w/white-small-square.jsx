import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.nrvmg4baa {
  fill: currentColor;
  d: path("M46 18v28H18V18zm2-2H16v32h32z");
}
</style><path class="nrvmg4baa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:white-small-square"} {...others} />);
}

export default Component;
