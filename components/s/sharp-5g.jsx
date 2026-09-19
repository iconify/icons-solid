import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ddrhh7k7f {
  fill: currentColor;
  d: path("M17 13h2v2h-5V9h7V7h-9v10h9v-6h-4zM3 13h5v2H3v2h7v-6H5V9h5V7H3z");
}
</style><path class="ddrhh7k7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-5g"} {...others} />);
}

export default Component;
