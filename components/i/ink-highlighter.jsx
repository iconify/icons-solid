import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uolxdn20s {
  fill: currentColor;
  d: path("m9.6 10l5.4 5.4l-5 5q-.6.6-1.4.6t-1.4-.6l-.05-.05l-.65.65h-5l3.15-3.15l-.05-.05q-.6-.6-.6-1.4t.6-1.4zm1.425-1.425L16 3.6q.6-.6 1.4-.6t1.4.6l2.6 2.6q.6.6.6 1.4T21.4 9l-4.975 4.975z");
}
</style><path class="uolxdn20s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ink-highlighter"} {...others} />);
}

export default Component;
