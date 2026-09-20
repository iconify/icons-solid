import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.pi2g5bq9h {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--55acee, #55acee);
}
</style><circle class="pi2g5bq9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:blue-circle"} {...others} />);
}

export default Component;
