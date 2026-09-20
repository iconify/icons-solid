import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qls-ksbws {
  fill: currentColor;
  d: path("M4 20V10H.975L12 2l11 8h-3v10zm4-1.5h8V17H8zm0-3h8V14H8zm0-3h8V11H8zM12 8q.425 0 .713-.288T13 7t-.288-.712T12 6t-.712.288T11 7t.288.713T12 8");
}
</style><path class="qls-ksbws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:garage-door-sharp"} {...others} />);
}

export default Component;
