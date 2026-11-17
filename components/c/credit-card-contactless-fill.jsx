import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l9yp_jbqq {
  fill: currentColor;
  d: path("M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm12.832.445a1 1 0 0 0-1.664 1.11a6.21 6.21 0 0 1 0 6.89a1 1 0 0 0 .277 1.387a1 1 0 0 0 1.387-.277a8.2 8.2 0 0 0 1.034-2.199a8.2 8.2 0 0 0-1.034-6.911m-2.42 3.234a4.6 4.6 0 0 0-.58-1.234a1 1 0 0 0-1.664 1.11a2.61 2.61 0 0 1 0 2.89a1 1 0 0 0 1.664 1.11a4.6 4.6 0 0 0 .58-3.876M8.01 11H8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="l9yp_jbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:credit-card-contactless-fill"} {...others} />);
}

export default Component;
