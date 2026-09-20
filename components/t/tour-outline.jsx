import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8_hwncsa {
  fill: currentColor;
  d: path("M5 22V2h2v2h14l-2 5l2 5H7v8zM7 6v6zm6.913 4.413Q14.5 9.825 14.5 9t-.587-1.412T12.5 7t-1.412.588T10.5 9t.588 1.413T12.5 11t1.413-.587M7 12h11.05l-1.2-3l1.2-3H7z");
}
</style><path class="h8_hwncsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tour-outline"} {...others} />);
}

export default Component;
