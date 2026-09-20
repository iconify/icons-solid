import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bszd1dm9o {
  fill: currentColor;
  d: path("M3 21L21 3v4.23h-1V5.422L5.421 20H17.5v1zm17-3.23V9.615h1v8.153zm1.23 2v1.46h-1.46v-1.46z");
}
</style><path class="bszd1dm9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-connected-no-internet-0-bar-sharp"} {...others} />);
}

export default Component;
