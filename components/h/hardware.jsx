import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jmzes4bih {
  fill: currentColor;
  d: path("M9 11V8H4q0-2.075 1.463-3.537T9 3h6v3l3-3h2v8h-2l-3-3v3zm1 10q-.425 0-.712-.288T9 20v-7h6v7q0 .425-.288.713T14 21z");
}
</style><path class="jmzes4bih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hardware"} {...others} />);
}

export default Component;
