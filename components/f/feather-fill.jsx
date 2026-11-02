import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lu791xb5c {
  fill: currentColor;
  d: path("m19.707 11.707l-6 6A1 1 0 0 1 13 18H7.414l-2.707 2.707a.999.999 0 1 1-1.414-1.414L6 16.586V11c0-.265.105-.52.293-.707l6-6a5.243 5.243 0 0 1 7.414 7.414m-10 4L11.414 14H15a1 1 0 0 0 0-2h-1.586l3.293-3.293a.999.999 0 1 0-1.414-1.414l-7 7a.999.999 0 1 0 1.414 1.414");
}
</style><path class="lu791xb5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:feather-fill"} {...others} />);
}

export default Component;
