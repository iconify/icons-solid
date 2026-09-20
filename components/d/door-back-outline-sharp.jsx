import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wj8joy8nz {
  fill: currentColor;
  d: path("M3 21v-2h2V3h14v16h2v2zm4-2h10V5H7zm3-6q.425 0 .713-.288T11 12t-.288-.712T10 11t-.712.288T9 12t.288.713T10 13M7 5v14z");
}
</style><path class="wj8joy8nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:door-back-outline-sharp"} {...others} />);
}

export default Component;
