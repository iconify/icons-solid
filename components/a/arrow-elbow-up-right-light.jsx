import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.me9i79bgm {
  fill: currentColor;
  d: path("m220.24 84.24l-48 48a6 6 0 0 1-8.48-8.48L201.51 86H78v138a6 6 0 0 1-12 0V80a6 6 0 0 1 6-6h129.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48");
}
</style><path class="me9i79bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-up-right-light"} {...others} />);
}

export default Component;
