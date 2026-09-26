import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ja2z0ptxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 22L9 6C9 3.7909 10.7909 2 13 2C15.2091 2 17 3.7909 17 6C17 6.7021 16.8152 7.3919 16.4641 8M6 15L15 15M4 22L20 22");
}
</style><path class="ja2z0ptxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:pound-sterling-fill"} {...others} />);
}

export default Component;
