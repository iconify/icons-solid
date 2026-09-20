import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.koxn03bip {
  fill: currentColor;
  d: path("M5 23V1h14v7h-8v13h2.825l2-2H19v4zm8-4v-9h9v7h-7zm-.288-13.288Q13 5.425 13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6t.713-.288");
}
</style><path class="koxn03bip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-chat-sharp"} {...others} />);
}

export default Component;
