import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gn9jv4_gz {
  fill: currentColor;
  d: path("M5 17h3l2-4V7H4v6h3zm10 0h3l2-4V7h-6v6h3z");
}
</style><path class="gn9jv4_gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-format-quote"} {...others} />);
}

export default Component;
