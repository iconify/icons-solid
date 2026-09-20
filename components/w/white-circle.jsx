import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.kb8v6gg9n {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--e6e7e8, #e6e7e8);
}
</style><circle class="kb8v6gg9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:white-circle"} {...others} />);
}

export default Component;
