import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vjovd25sv {
  fill: currentColor;
  d: path("M2 20V4h20v16zM4 8h16V6H4zm0 10h16v-6H4zm0 0V6z");
}
</style><path class="vjovd25sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:credit-card-outline-sharp"} {...others} />);
}

export default Component;
