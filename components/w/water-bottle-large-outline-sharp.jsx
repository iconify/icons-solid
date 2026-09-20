import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ppeagqbhq {
  fill: currentColor;
  d: path("M7 20h10v-2h-2v-7h-2V9h4V7H7v2h2v7h2v2H7zm-2 2v-6h2v-5H5V5h5V4H9V2h6v2h-1v1h5v6h-2v5h2v6zm7-8.5");
}
</style><path class="ppeagqbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:water-bottle-large-outline-sharp"} {...others} />);
}

export default Component;
