import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.av-fufpup {
  fill: currentColor;
  d: path("m13.669 9.498l-2.548 1.912a4.2 4.2 0 0 1 0 1.18l2.548 1.912a4.164 4.164 0 0 1 7.176 4.092a4.162 4.162 0 0 1-7.966-2.184l-2.548-1.912a4.163 4.163 0 1 1 0-4.996l2.548-1.912a4.162 4.162 0 1 1 .79 1.908");
}
</style><path class="av-fufpup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:share-alt-fill-round"} {...others} />);
}

export default Component;
