import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r3izwg3ac {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm5 17h13V7a1 1 0 0 1 2 0v14a1 1 0 0 1-1 1H7a1 1 0 0 1 0-2");
}
</style><path class="r3izwg3ac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:drop-shadow-fill-sharp"} {...others} />);
}

export default Component;
