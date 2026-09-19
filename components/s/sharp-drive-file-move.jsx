import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s-fht_o0j {
  fill: currentColor;
  d: path("M22 6H12l-2-2H2v16h20zM12 17v-3H8v-2h4V9l4 4z");
}
</style><path class="s-fht_o0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-drive-file-move"} {...others} />);
}

export default Component;
