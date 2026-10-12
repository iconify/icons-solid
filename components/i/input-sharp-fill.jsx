import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ftsn9c5og {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 6L22 6C22.5523 6 23 6.4477 23 7L23 17C23 17.5523 22.5523 18 22 18L2 18C1.4477 18 1 17.5523 1 17L1 7C1 6.4477 1.4477 6 2 6ZM7 10L5 10L5 14L7 14L7 10Z");
}
</style><path clip-rule="evenodd" class="ftsn9c5og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:input-sharp-fill"} {...others} />);
}

export default Component;
