import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pqe799quy {
  fill: currentColor;
  d: path("M17 10.5V6H3v12h14v-4.5l4 4v-11zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3z");
}
</style><path class="pqe799quy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-video-call"} {...others} />);
}

export default Component;
