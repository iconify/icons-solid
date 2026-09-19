import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rkta2db5x {
  fill: currentColor;
  d: path("M18.71 3H5.29L3 5.79V21h18V5.79zM14 15v2h-4v-2H6.5L12 9.5l5.5 5.5zM5.12 5l.81-1h12l.94 1z");
}
</style><path class="rkta2db5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-unarchive"} {...others} />);
}

export default Component;
