import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gax97-omy {
  fill: currentColor;
  d: path("M142 200a14 14 0 1 1-14-14a14 14 0 0 1 14 14m-14-42a6 6 0 0 0 6-6V48a6 6 0 0 0-12 0v104a6 6 0 0 0 6 6");
}
</style><path class="gax97-omy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:exclamation-mark-light"} {...others} />);
}

export default Component;
