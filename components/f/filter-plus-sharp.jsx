import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vi8n2yidj {
  fill: currentColor;
  d: path("M8 20v-7L.95 4h18.1L12 13v7zm9 0v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="vi8n2yidj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-plus-sharp"} {...others} />);
}

export default Component;
