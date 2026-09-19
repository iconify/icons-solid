import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.m6-lu3s9q {
  fill: currentColor;
  d: path("M50 14v36H14V14zm2-2H12v40h40z");
}
</style><path class="m6-lu3s9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:white-medium-small-square"} {...others} />);
}

export default Component;
