import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kadpm5bkp {
  fill: currentColor;
  d: path("M19 13H5v-2h14z");
}
</style><path class="kadpm5bkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:remove"} {...others} />);
}

export default Component;
