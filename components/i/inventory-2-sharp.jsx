import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-oku9bdc {
  fill: currentColor;
  d: path("M3 22V9H2V2h20v7h-1v13zM4 7h16V4H4zm5 7h6v-2H9z");
}
</style><path class="c-oku9bdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:inventory-2-sharp"} {...others} />);
}

export default Component;
