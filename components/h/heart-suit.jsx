import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.wi1njvkyb {
  fill: var(--svg-color--ff5a79, #ff5a79);
  d: path("M46.1 2C39.8 2 34.5 5.6 32 10.8C29.5 5.6 24.2 2 17.9 2C9.2 2 2 9.4 2 17.9C2 32.4 32 62 32 62s30-29.6 30-44.1C62 9.4 54.8 2 46.1 2");
}
</style><path class="wi1njvkyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:heart-suit"} {...others} />);
}

export default Component;
