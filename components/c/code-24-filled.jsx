import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qr7e7ob8a {
  fill: currentColor;
  d: path("M14.042 1.713a1 1 0 0 1 1.916.574l-6 20a1 1 0 0 1-1.916-.574zm-7.749 4.58a1 1 0 0 1 1.414 1.414L3.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414zm10 0a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L20.586 12l-4.293-4.293a1 1 0 0 1 0-1.414");
}
</style><path class="qr7e7ob8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:code-24-filled"} {...others} />);
}

export default Component;
