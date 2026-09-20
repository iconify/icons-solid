import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nu8gwy0th {
  fill: currentColor;
  d: path("M2 22L22 2v20zm8-2h10V6.85l-10 10z");
}
</style><path class="nu8gwy0th"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-1-bar-sharp"} {...others} />);
}

export default Component;
