import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iuyi89bfv {
  fill: currentColor;
  d: path("M3 22v-7h3v-4h5V9H8V2h8v7h-3v2h5v4h3v7h-8v-7h3v-2H8v2h3v7zm7-15h4V4h-4zM5 20h4v-3H5zm10 0h4v-3h-4zm0-3");
}
</style><path class="iuyi89bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:lan-outline"} {...others} />);
}

export default Component;
