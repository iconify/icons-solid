import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pznt0ob-e {
  fill: currentColor;
  d: path("M1 17V7h6v10zm8 0V7h6v10zm8 0V7h6v10zM3 15h2V9H3zm16 0h2V9h-2z");
}
</style><path class="pznt0ob-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flex-no-wrap"} {...others} />);
}

export default Component;
