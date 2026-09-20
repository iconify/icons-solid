import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ou_wv0b-c {
  fill: currentColor;
  d: path("M14 21v-8h8v8zM2 18v-2h9v2zm12-7V3h8v8zM2 8V6h9v2z");
}
</style><path class="ou_wv0b-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:event-list-sharp"} {...others} />);
}

export default Component;
