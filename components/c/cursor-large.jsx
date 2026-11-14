import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.toqybnl3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6.621v9.314a1.115 1.115 0 0 0 1.875.815l.349-.326a1.5 1.5 0 0 1 2.39.476l1.127 2.479a1.24 1.24 0 0 0 1.634.621a1.22 1.22 0 0 0 .616-1.621l-1.027-2.258A1.5 1.5 0 0 1 14.83 14H15a1.036 1.036 0 0 0 .732-1.768L9.061 5.561A1.5 1.5 0 0 0 6.5 6.621");
}
</style><path class="toqybnl3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cursor-large"} {...others} />);
}

export default Component;
