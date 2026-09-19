import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n0rqd4bhg {
  fill: currentColor;
  d: path("m14.2 6l-6 6l6 6l1.41-1.41L11.03 12l4.58-4.59z");
}
</style><path class="n0rqd4bhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-navigate-before"} {...others} />);
}

export default Component;
