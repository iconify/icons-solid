import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n4-agze3v {
  fill: currentColor;
  d: path("M3 21v-6h2v6zm3-2v-2h6v-4H5.65l3-10h8.7l3 10H14v6z");
}
</style><path class="n4-agze3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wall-lamp-sharp"} {...others} />);
}

export default Component;
