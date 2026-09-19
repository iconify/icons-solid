import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.io1p7oban {
  fill: currentColor;
  d: path("M2 2v20l4-4h16V2zm17 11l-2.5-1.5L14 13V5h5z");
}
</style><path class="io1p7oban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-comment-bank"} {...others} />);
}

export default Component;
