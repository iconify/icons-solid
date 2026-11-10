import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j6hp5_bti {
  fill: currentColor;
  d: path("M16 13C16.552 13 17 13.448 17 14V19H23V21H1V19H7V14C7 13.448 7.448 13 8 13H16ZM20 3C20.552 3 21 3.448 21 4V9H23V11H1V9H3V4C3 3.448 3.448 3 4 3H20Z");
}
</style><path class="j6hp5_bti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-vertical-distribute-end-sharp-fill"} {...others} />);
}

export default Component;
