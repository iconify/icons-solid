import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.rdyvtebzo {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M7.707 18.708a1.003 1.003 0 0 1 0-1.414l9.585-9.586a1.003 1.003 0 0 1 1.414 0l9.587 9.587a1.003 1.003 0 0 1 0 1.414l-9.587 9.585a1.003 1.003 0 0 1-1.414 0z");
}
</style><path class="rdyvtebzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:small-blue-diamond"} {...others} />);
}

export default Component;
