import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zm19ufxjq {
  fill: currentColor;
  d: path("M7 21V3h10v18z");
}
</style><path class="zm19ufxjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-9-16-sharp"} {...others} />);
}

export default Component;
