import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oly0nib0u {
  fill: currentColor;
  d: path("M5 4a1 1 0 0 1 1.894-.447L12 13.764l5.106-10.211A.998.998 0 0 1 19 4v16a1 1 0 0 1-2 0V8.236l-4.106 8.211a.998.998 0 0 1-1.788 0L7 8.236V20a1 1 0 0 1-2 0Z");
}
</style><path class="oly0nib0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-m-fill"} {...others} />);
}

export default Component;
