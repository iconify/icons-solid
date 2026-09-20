import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.s7lk2nbec {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--78b159, #78b159);
}
</style><circle class="s7lk2nbec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:green-circle"} {...others} />);
}

export default Component;
