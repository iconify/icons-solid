import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q6naq-7ae {
  fill: currentColor;
  d: path("M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28z");
}
</style><path class="q6naq-7ae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-bolt"} {...others} />);
}

export default Component;
