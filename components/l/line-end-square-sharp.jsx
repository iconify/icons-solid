import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ku0eoab9h {
  fill: currentColor;
  d: path("M11 17.5V13H2v-2h9V6.5h11v11z");
}
</style><path class="ku0eoab9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end-square-sharp"} {...others} />);
}

export default Component;
