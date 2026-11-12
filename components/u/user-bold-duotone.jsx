import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bxpukbbcg {
  fill: currentColor;
  d: path("M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.f0nhpsynn {
  cx: 12px;
  cy: 6px;
  r: 4px;
  fill: currentColor;
}
</style><circle class="f0nhpsynn"/><path class="bxpukbbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-bold-duotone"} {...others} />);
}

export default Component;
