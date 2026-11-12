import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f0nhpsynn {
  cx: 12px;
  cy: 6px;
  r: 4px;
  fill: currentColor;
}

.rarrkzbto {
  cx: 12px;
  cy: 17px;
  fill: currentColor;
  opacity: var(--svg-opacity--0-5, 0.5);
  rx: 7px;
  ry: 4px;
}
</style><circle class="f0nhpsynn"/><ellipse class="rarrkzbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-rounded-bold-duotone"} {...others} />);
}

export default Component;
