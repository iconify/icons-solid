import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.v3zua8ezc {
  fill: var(--svg-color--f4900c, #f4900c);
  d: path("M7.707 18.708a1.003 1.003 0 0 1 0-1.414l9.585-9.586a1.003 1.003 0 0 1 1.414 0l9.587 9.587a1.003 1.003 0 0 1 0 1.414l-9.587 9.585a1.003 1.003 0 0 1-1.414 0z");
}
</style><path class="v3zua8ezc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:small-orange-diamond"} {...others} />);
}

export default Component;
