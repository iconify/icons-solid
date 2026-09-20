import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n24o--baw {
  fill: currentColor;
  d: path("M2 20v-5h11V4h9v16zm0-6V6h8zm3.825-1L11 7.825V13z");
}
</style><path class="n24o--baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:files-sharp"} {...others} />);
}

export default Component;
