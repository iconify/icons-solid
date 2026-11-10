import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ui1p-dbka {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 4H17C19.76 4 22 6.24 22 9V18H11M7 4C4.239 4 2 6.24 2 9V18H12M7 4C9.761 4 12 6.24 12 9V18M12 18V21M5 9H9");
}
</style><path class="ui1p-dbka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mailbox-sharp"} {...others} />);
}

export default Component;
