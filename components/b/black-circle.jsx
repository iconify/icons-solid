import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.v6ehlpb7m {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--31373d, #31373d);
}
</style><circle class="v6ehlpb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:black-circle"} {...others} />);
}

export default Component;
