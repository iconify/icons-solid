import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pd_21ybya {
  fill: currentColor;
  d: path("M1 20L12 1l11 19zm10-3.5h2v-2h2v-2h-2v-2h-2v2H9v2h2z");
}
</style><path class="pd_21ybya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-triangle"} {...others} />);
}

export default Component;
