import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jxdmxab3w {
  fill: currentColor;
  d: path("M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6m-.63-10h1.25l2.63 7h-1.21l-.63-1.79h-2.83L9.96 12H8.74zM7 17h2v5H7zm4 0h2v5h-2zm4 0h6v5h-6z");
}

.x6spekq-o {
  fill: currentColor;
  d: path("M12.03 6.3h-.06l-1.02 2.89h2.1zM3 17h2v5H3z");
}
</style><path class="x6spekq-o"/><path class="jxdmxab3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-autofps-select"} {...others} />);
}

export default Component;
