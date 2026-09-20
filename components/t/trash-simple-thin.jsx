import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jc2b22c-f {
  fill: currentColor;
  d: path("M216 52H40a4 4 0 0 0 0 8h12v148a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12V60h12a4 4 0 0 0 0-8m-20 156a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V60h136ZM84 24a4 4 0 0 1 4-4h80a4 4 0 0 1 0 8H88a4 4 0 0 1-4-4");
}
</style><path class="jc2b22c-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:trash-simple-thin"} {...others} />);
}

export default Component;
