import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_4vmdfre {
  fill: currentColor;
  d: path("M2 20v-5h2v3h16V6H4v3H2V4h20v16zm9.5-3.5l-1.4-1.45L12.175 13H2v-2h10.175L10.1 8.95l1.4-1.45L16 12z");
}
</style><path class="f_4vmdfre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:input-outline-sharp"} {...others} />);
}

export default Component;
