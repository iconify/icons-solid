import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u63g9u3in {
  fill: currentColor;
  d: path("M8 18v-5H3l9-11l9 11h-5v5zm-4 4v-2h16v2z");
}
</style><path class="u63g9u3in"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shift-lock-sharp"} {...others} />);
}

export default Component;
