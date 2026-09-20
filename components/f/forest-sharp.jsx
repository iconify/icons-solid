import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d914g8bdo {
  fill: currentColor;
  d: path("M13 22v-3h4v3zm-6 0v-4H0l3.85-6H2L9 2l7 10h-1.85l3.875 6H11v4zm12.25-4L16 13h1.925l-5.3-7.575L15 2l7 10h-1.85L24 18z");
}
</style><path class="d914g8bdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:forest-sharp"} {...others} />);
}

export default Component;
