import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ifxuvobxe {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 0 2h-2v2h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8V4H9a1 1 0 0 1 0-2ZM4 8v3h3V8Zm5 0v3h3V8Zm5 3h6V8h-6Zm7 9a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="ifxuvobxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tram-side-fill-sharp"} {...others} />);
}

export default Component;
