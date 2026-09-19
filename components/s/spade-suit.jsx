import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.lclnicboc {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M62 32.9C62 18.5 32 2 32 2S2 18.5 2 32.9c0 8.6 7.2 15.9 15.9 15.9c4.2 0 7.9-1.6 10.7-4.2l-.4 3.3c-.5 3.6-3 6.9-6.6 7.5l-4.6 1V62h30v-5.6l-4.7-.9c-3.6-.6-6.1-3.9-6.6-7.5l-.4-3.3c2.8 2.6 6.5 4.2 10.7 4.2c8.8 0 16-7.4 16-16");
}
</style><path class="lclnicboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:spade-suit"} {...others} />);
}

export default Component;
