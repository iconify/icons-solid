import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.vgqmnobzc {
  fill: currentColor;
  d: path("M14 4H6a2 2 0 0 0-2 2v1a3 3 0 0 1 2.829 2h6.342A3 3 0 0 1 16 7V6a2 2 0 0 0-2-2m2 4a2 2 0 0 0-1.938 1.505c-.068.268-.286.495-.562.495h-7c-.276 0-.494-.227-.562-.495A2 2 0 0 0 2 10v2a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2");
}
</style><path class="vgqmnobzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:couch-20-filled"} {...others} />);
}

export default Component;
