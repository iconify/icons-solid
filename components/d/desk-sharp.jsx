import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dvtcp1b1f {
  fill: currentColor;
  d: path("M2 18V6h20v12h-2v-2h-4v2h-2V8H4v10zm14-8h4V8h-4zm0 4h4v-2h-4z");
}
</style><path class="dvtcp1b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:desk-sharp"} {...others} />);
}

export default Component;
