import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tjywkblmi {
  fill: currentColor;
  d: path("M16 21H3V3h18v13zm-1-2l4-4h-4zm-4-3h2v-6h3V8H8v2h3z");
}
</style><path class="tjywkblmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sticky-note-sharp"} {...others} />);
}

export default Component;
