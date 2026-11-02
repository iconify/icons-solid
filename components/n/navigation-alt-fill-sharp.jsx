import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p-z2n3bcy {
  fill: currentColor;
  d: path("M18.949 20.684a.999.999 0 0 1-1.396 1.21L12 19.118l-5.553 2.776a.999.999 0 0 1-1.396-1.21l6-18a1 1 0 0 1 1.898 0Z");
}
</style><path class="p-z2n3bcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:navigation-alt-fill-sharp"} {...others} />);
}

export default Component;
