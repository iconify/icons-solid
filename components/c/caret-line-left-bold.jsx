import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b9a4hgbuz {
  fill: currentColor;
  d: path("M200.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L129 128ZM72 36a12 12 0 0 0-12 12v160a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12");
}
</style><path class="b9a4hgbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-line-left-bold"} {...others} />);
}

export default Component;
