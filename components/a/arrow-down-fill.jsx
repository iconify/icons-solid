import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s7rjugupz {
  fill: currentColor;
  d: path("m11.293 19.707l-5-5a.999.999 0 1 1 1.414-1.414L11 16.586V5a1 1 0 0 1 2 0v11.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0");
}
</style><path class="s7rjugupz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-fill"} {...others} />);
}

export default Component;
