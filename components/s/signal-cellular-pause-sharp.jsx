import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nxpg_bx2g {
  fill: currentColor;
  d: path("M2 22L22 2v11h-9v9zm17 0v-7h2v7zm-4 0v-7h2v7z");
}
</style><path class="nxpg_bx2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-pause-sharp"} {...others} />);
}

export default Component;
