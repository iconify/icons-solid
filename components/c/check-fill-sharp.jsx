import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vi26zpr3v {
  fill: currentColor;
  d: path("m10 14.586l7.293-7.293a.999.999 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="vi26zpr3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:check-fill-sharp"} {...others} />);
}

export default Component;
