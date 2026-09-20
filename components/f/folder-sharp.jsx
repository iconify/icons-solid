import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u56kdfmjm {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14z");
}
</style><path class="u56kdfmjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:folder-sharp"} {...others} />);
}

export default Component;
