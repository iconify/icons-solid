import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.kj73mib-f {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--dd2e44, #dd2e44);
}
</style><circle class="kj73mib-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:red-circle"} {...others} />);
}

export default Component;
