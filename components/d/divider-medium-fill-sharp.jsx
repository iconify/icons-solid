import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y9qwkaj6s {
  fill: currentColor;
  d: path("M13 7v10a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0");
}
</style><path class="y9qwkaj6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:divider-medium-fill-sharp"} {...others} />);
}

export default Component;
