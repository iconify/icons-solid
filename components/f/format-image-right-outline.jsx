import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xyndqg73e {
  fill: currentColor;
  d: path("M11 17V7h10v10zm2-2h6V9h-6zM3 21v-2h18v2zm0-4v-2h6v2zm0-4v-2h6v2zm0-4V7h6v2zm0-4V3h18v2zm13 7");
}
</style><path class="xyndqg73e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-image-right-outline"} {...others} />);
}

export default Component;
