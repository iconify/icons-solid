import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lkot58gix {
  fill: currentColor;
  d: path("M4 15.635V12.5h16v3.135zM4 11.5V8.366h16V11.5zm0-4.134V4.23h16v3.135zm0 12.403v-3.134h16v3.134z");
}
</style><path class="lkot58gix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:table-rows-narrow"} {...others} />);
}

export default Component;
