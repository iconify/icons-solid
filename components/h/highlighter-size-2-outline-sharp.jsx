import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbmvxw3jm {
  fill: currentColor;
  d: path("m7.396 18.704l-2.1-2.1q-.165-.166-.165-.367t.165-.366L15.871 5.296q.166-.165.367-.165t.366.165l2.1 2.125q.14.14.14.354t-.14.354L8.129 18.704q-.165.165-.366.165t-.367-.165");
}
</style><path class="bbmvxw3jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:highlighter-size-2-outline-sharp"} {...others} />);
}

export default Component;
