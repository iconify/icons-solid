import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9aiwsnho {
  fill: currentColor;
  d: path("M6 16q-.417 0-.708-.291Q5 15.418 5 15.002t.292-.709T6 14h12q.417 0 .708.291q.292.291.292.707t-.292.709T18 16zm0-6q-.417 0-.708-.291Q5 9.418 5 9.002t.292-.709T6 8h12q.417 0 .708.291q.292.291.292.707t-.292.709T18 10z");
}
</style><path class="f9aiwsnho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:equal-outline-rounded"} {...others} />);
}

export default Component;
