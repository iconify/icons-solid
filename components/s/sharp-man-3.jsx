import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uw8f57zpo {
  fill: currentColor;
  d: path("M16 7H8v8h2v7h4v-7h2zm-4-5.249L14.248 4L12 6.248L9.75 4z");
}
</style><path class="uw8f57zpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-man-3"} {...others} />);
}

export default Component;
