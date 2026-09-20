import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.berj5wbmr {
  fill: currentColor;
  d: path("M4 19.385v-6h16v6zm1-1h14v-4H5zm-1-7.77v-6h16v6zm1-1h14v-4H5zm0 4.77v4zm0-8.77v4z");
}
</style><path class="berj5wbmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-agenda-outline-sharp"} {...others} />);
}

export default Component;
