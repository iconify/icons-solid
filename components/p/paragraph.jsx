import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rds65xbce {
  fill: currentColor;
  d: path("M208 40H96a64 64 0 0 0 0 128h40v40a8 8 0 0 0 16 0V56h24v152a8 8 0 0 0 16 0V56h16a8 8 0 0 0 0-16m-72 112H96a48 48 0 0 1 0-96h40Z");
}
</style><path class="rds65xbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:paragraph"} {...others} />);
}

export default Component;
