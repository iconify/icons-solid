import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tcitzz90m {
  fill: currentColor;
  d: path("M3 21v-2h2V3h14v16h2v2zm4-2h10V5H7zm7-6q.425 0 .713-.288T15 12t-.288-.712T14 11t-.712.288T13 12t.288.713T14 13M7 5v14z");
}
</style><path class="tcitzz90m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:door-front-outline-sharp"} {...others} />);
}

export default Component;
