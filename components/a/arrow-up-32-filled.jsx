import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.v33rc6ber {
  fill: currentColor;
  d: path("M16 29c-.69 0-1.25-.56-1.25-1.25V7.213l-7.628 7.432a1.25 1.25 0 1 1-1.744-1.79l9.747-9.497a1.246 1.246 0 0 1 1.75 0l9.747 9.497a1.25 1.25 0 1 1-1.744 1.79L17.25 7.213V27.75c0 .69-.56 1.25-1.25 1.25");
}
</style><path class="v33rc6ber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-32-filled"} {...others} />);
}

export default Component;
