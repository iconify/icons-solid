import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.mqc5ysb8a {
  fill: var(--svg-color--e75a70, #e75a70);
  d: path("M19.146 26.361c-.63.901-1.637.884-2.236-.038L6.09 9.677C5.491 8.754 5.9 8 7 8h23c1.1 0 1.483.737.854 1.639z");
}
</style><path class="mqc5ysb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:red-triangle-pointed-down"} {...others} />);
}

export default Component;
