import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bsp6pzdct {
  fill: currentColor;
  d: path("M13.412 18.926a1.9 1.9 0 0 1-2.824 0l-7.697-8.552a2 2 0 0 1 .073-2.752l2.743-2.743A3 3 0 0 1 7.828 4h8.344a3 3 0 0 1 2.121.879l2.743 2.743a2 2 0 0 1 .073 2.752ZM8.707 8.293a.999.999 0 1 0-1.414 1.414l2 2a.999.999 0 1 0 1.414-1.414Z");
}
</style><path class="bsp6pzdct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gem-fill"} {...others} />);
}

export default Component;
