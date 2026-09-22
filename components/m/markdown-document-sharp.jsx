import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bx03zlrcd {
  fill: currentColor;
  d: path("M12 22v-9h10v9h-2v-7h-2v5h-2v-5h-2v7zm-9-1V3h18v8H7v2h3v2H7v2h3v4z");
}
</style><path class="bx03zlrcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:markdown-document-sharp"} {...others} />);
}

export default Component;
