import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p7syljm8d {
  fill: currentColor;
  d: path("m15.9 19.55l-1.4-1.425L16.6 16l-2.1-2.125l1.4-1.425l2.125 2.15l2.125-2.15l1.4 1.425L19.45 16l2.1 2.125l-1.4 1.425l-2.125-2.15zM8 20v-7L.95 4h18.1L12 13v7zm2-7.7L14.95 6h-9.9zm0 0");
}
</style><path class="p7syljm8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-cancel-outline-sharp"} {...others} />);
}

export default Component;
