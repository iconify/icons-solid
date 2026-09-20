import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gr-d04i3s {
  fill: currentColor;
  d: path("M5 22V3h16l-2 5l2 5H7v9z");
}
</style><path class="gr-d04i3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flag-2"} {...others} />);
}

export default Component;
