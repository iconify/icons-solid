import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tucfh4qwq {
  fill: currentColor;
  d: path("m3.658 10.616l.275-4.106q.05-.646.51-1.078Q4.901 5 5.547 5h12.904q.646 0 1.106.432q.46.431.51 1.077l.274 4.107zM5.692 19l-.267-.846H4.9q-.702 0-1.184-.51q-.481-.51-.431-1.211l.306-4.799H20.41l.306 4.799q.05.701-.432 1.211t-1.184.51h-.525l-.267.846z");
}
</style><path class="tucfh4qwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:nest-gale-wifi"} {...others} />);
}

export default Component;
