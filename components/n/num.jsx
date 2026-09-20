import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p1mf8bbau {
  fill: var(--svg-color--0000d8, #0000d8);
  d: path("M9 4.8v8.4l6 6v-8.4zm12 0h-6v6l4.2 4.182L15 19.2h6zm-12 0H3v14.4h6v-6L4.8 9z");
}
</style><path class="p1mf8bbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:num"} {...others} />);
}

export default Component;
