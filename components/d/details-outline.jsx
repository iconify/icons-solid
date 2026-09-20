import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ailo9ub1p {
  fill: currentColor;
  d: path("M2 21L12 3l10 18zm3.4-2H11V8.925zm7.6 0h5.6L13 8.925z");
}
</style><path class="ailo9ub1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:details-outline"} {...others} />);
}

export default Component;
