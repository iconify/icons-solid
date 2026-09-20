import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.duy63e0pn {
  fill: currentColor;
  d: path("m12 15.6l3.2-4.6h-2.85l2-7H9v8h3zM10 22v-8H7V2h10l-2 7h4zm2-10H9z");
}
</style><path class="duy63e0pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flash-on-outline"} {...others} />);
}

export default Component;
