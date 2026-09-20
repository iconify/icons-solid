import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gaevpkbbp {
  fill: currentColor;
  d: path("M7 17h5v-2H7zm-4 4V3h18v18zM8 5v8l4-2l4 2V5z");
}
</style><path class="gaevpkbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:package-sharp"} {...others} />);
}

export default Component;
