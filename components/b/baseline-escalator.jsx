import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ep60skb2e {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 6h-1.7l-5 9H7c-.83 0-1.5-.67-1.5-1.5S6.17 15 7 15h1.7l5-9H17c.83 0 1.5.67 1.5 1.5S17.83 9 17 9");
}
</style><path class="ep60skb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-escalator"} {...others} />);
}

export default Component;
