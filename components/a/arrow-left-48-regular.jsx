import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w1zrvhjoq {
  fill: currentColor;
  d: path("M44 24c0 .69-.56 1.25-1.25 1.25H10.304l12.822 12.609a1.25 1.25 0 1 1-1.752 1.782L6.386 24.903l-.027-.027a1.25 1.25 0 0 1-.352-1.008a1.25 1.25 0 0 1 .393-.785L21.374 8.359a1.25 1.25 0 1 1 1.752 1.782L10.304 22.75H42.75c.69 0 1.25.56 1.25 1.25");
}
</style><path class="w1zrvhjoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-left-48-regular"} {...others} />);
}

export default Component;
