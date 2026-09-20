import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ss65rm3ja {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h7V6H4zm9 0h7V6h-7zm1-8h5V8.5h-5zm0 2.5h5V11h-5zm0 2.5h5v-1.5h-5zM4 6v12z");
}
</style><path class="ss65rm3ja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chrome-reader-mode-outline-sharp"} {...others} />);
}

export default Component;
