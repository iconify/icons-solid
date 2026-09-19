import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jvt2f9bfe {
  fill: currentColor;
  d: path("M21 11V3h-8l3.29 3.29l-10 10L3 13v8h8l-3.29-3.29l10-10z");
}
</style><path class="jvt2f9bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-open-in-full"} {...others} />);
}

export default Component;
