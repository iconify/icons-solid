import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.jyo12bpqb {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--c1694f, #c1694f);
}
</style><circle class="jyo12bpqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:brown-circle"} {...others} />);
}

export default Component;
