import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nd16z6bmy {
  fill: currentColor;
  d: path("M9 12h6V6H9zM7 22V4h3V2h4v2h3v18z");
}
</style><path class="nd16z6bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-4-bar-sharp"} {...others} />);
}

export default Component;
