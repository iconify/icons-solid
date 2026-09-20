import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r5veduxjo {
  fill: currentColor;
  d: path("M8 12.5h8V11H8zM12 8q.425 0 .713-.288T13 7t-.288-.712T12 6t-.712.288T11 7t.288.713T12 8M4 20V10H.975L12 2l11 8h-3v10h-4v-6H8v6z");
}
</style><path class="r5veduxjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:garage-door-open"} {...others} />);
}

export default Component;
