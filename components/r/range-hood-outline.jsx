import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pb7gqg24g {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18v-4.2q0-.4.163-.763T2.6 12.4L7 8V3h10v5l4.425 4.425q.275.275.425.638t.15.762V18q0 .825-.587 1.413T20 20zm1.8-8h12.4L15 8.8V5H9v3.8zM4 18h16v-4H4zm6-1.3v-1.5h4v1.5z");
}
</style><path class="pb7gqg24g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:range-hood-outline"} {...others} />);
}

export default Component;
