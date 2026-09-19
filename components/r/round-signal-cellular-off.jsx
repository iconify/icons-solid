import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xhfkwtbla {
  fill: currentColor;
  d: path("M21 3.41c0-.89-1.08-1.34-1.71-.71l-6.6 6.6L21 17.61zm.44 17.47L5.62 5.06a.996.996 0 1 0-1.41 1.41l5.66 5.66l-7.16 7.16c-.63.63-.19 1.71.7 1.71h15.32l1.29 1.29c.39.39 1.02.39 1.41 0c.4-.39.4-1.02.01-1.41");
}
</style><path class="xhfkwtbla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-signal-cellular-off"} {...others} />);
}

export default Component;
