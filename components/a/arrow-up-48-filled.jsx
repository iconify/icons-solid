import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.z9cigpjpp {
  fill: currentColor;
  d: path("M24 44.25a1.5 1.5 0 0 1-1.5-1.5V10.915L10.32 23.302a1.5 1.5 0 1 1-2.14-2.104L22.928 6.201l.02-.02a1.5 1.5 0 0 1 2.145.042L39.82 21.198a1.5 1.5 0 1 1-2.139 2.104L25.5 10.915V42.75a1.5 1.5 0 0 1-1.5 1.5");
}
</style><path class="z9cigpjpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-48-filled"} {...others} />);
}

export default Component;
