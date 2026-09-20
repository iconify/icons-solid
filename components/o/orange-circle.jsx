import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.y-jqxs3dx {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--f4900c, #f4900c);
}
</style><circle class="y-jqxs3dx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:orange-circle"} {...others} />);
}

export default Component;
