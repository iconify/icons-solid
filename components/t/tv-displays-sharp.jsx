import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x071_zhcd {
  fill: currentColor;
  d: path("M2 16V2h16v2H4v12zm9 6v-2H6V6h17v14h-5v2z");
}
</style><path class="x071_zhcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tv-displays-sharp"} {...others} />);
}

export default Component;
