import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":10,"height":10};
const content = `<style>.pd6y98bku {
  fill: currentColor;
  d: path("M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10M3.5 4.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1");
}
</style><path class="pd6y98bku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-dnd-10-filled"} {...others} />);
}

export default Component;
