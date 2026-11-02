import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r7du0phez {
  fill: currentColor;
  d: path("M3.293 12.707a1 1 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L5.414 12l4.293 4.293a.999.999 0 1 1-1.414 1.414Zm17.414-1.414a1 1 0 0 1 0 1.414l-5 5a.999.999 0 1 1-1.414-1.414L18.586 12l-4.293-4.293a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="r7du0phez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:code-fill-round"} {...others} />);
}

export default Component;
