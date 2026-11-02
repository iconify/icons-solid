import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cwi01ccmh {
  fill: currentColor;
  d: path("M9 5h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9a1 1 0 0 1-.707-.293l-5-5a2.414 2.414 0 0 1 0-3.414l5-5A1 1 0 0 1 9 5m4.707 4.293a.999.999 0 1 0-1.414 1.414L13.586 12l-1.293 1.293a.999.999 0 1 0 1.414 1.414L15 13.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L16.414 12l1.293-1.293a.999.999 0 1 0-1.414-1.414L15 10.586Z");
}
</style><path class="cwi01ccmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:backspace-fill"} {...others} />);
}

export default Component;
