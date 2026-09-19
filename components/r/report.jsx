import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.felv4u99q {
  fill: currentColor;
  d: path("M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM12 17.3c-.72 0-1.3-.58-1.3-1.3s.58-1.3 1.3-1.3s1.3.58 1.3 1.3s-.58 1.3-1.3 1.3m1-4.3h-2V7h2z");
}
</style><path class="felv4u99q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:report"} {...others} />);
}

export default Component;
