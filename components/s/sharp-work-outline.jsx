import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.alpgeibpq {
  fill: currentColor;
  d: path("M14 6V4h-4v2zM4 8v11h16V8zm18-2v15H2.01V6H8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2z");
}
</style><path class="alpgeibpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-work-outline"} {...others} />);
}

export default Component;
