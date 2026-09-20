import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a53a2lbtz {
  fill: currentColor;
  d: path("M18.925 16.075L6.85 4H16l6 8zM20.5 23.3L17.2 20H2V4.8L.7 3.5l1.4-1.4l19.8 19.8z");
}
</style><path class="a53a2lbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:label-off-sharp"} {...others} />);
}

export default Component;
