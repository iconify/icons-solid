import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nmr8znbzw {
  fill: currentColor;
  d: path("M21.04 3h-18v18h18zm-6 14h-2v-4h-4V7h2v4h2V7h2z");
}
</style><path class="nmr8znbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-looks-4"} {...others} />);
}

export default Component;
