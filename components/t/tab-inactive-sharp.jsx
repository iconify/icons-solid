import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.of5p68btr {
  fill: currentColor;
  d: path("M6 22v-4H2v-4h2v2h2V6h10V4h-2V2h4v4h4v16zM2 12V8h2v4zm0-6V2h4v2H4v2zm6-2V2h4v2z");
}
</style><path class="of5p68btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tab-inactive-sharp"} {...others} />);
}

export default Component;
