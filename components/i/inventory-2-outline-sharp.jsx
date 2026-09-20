import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j9gdoubtb {
  fill: currentColor;
  d: path("M3 22V9H2V2h20v7h-1v13zm2-2h14V9H5zM4 7h16V4H4zm5 7h6v-2H9zm3 .5");
}
</style><path class="j9gdoubtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:inventory-2-outline-sharp"} {...others} />);
}

export default Component;
