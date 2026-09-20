import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qveqw0aqz {
  fill: currentColor;
  d: path("M2 21V7h2v12h15v2zm4-4V3h17v14zm2-2h13V5H8zm2-3h4V7h-4zm5 0h4v-2h-4zm0-3h4V7h-4zm-7 6V5z");
}
</style><path class="qveqw0aqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:full-coverage-outline-sharp"} {...others} />);
}

export default Component;
