import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v4g6z_bui {
  fill: currentColor;
  d: path("M11 16.5h2c0 .55-.45 1-1 1s-1-.45-1-1m4-1.5v-2.34c0-1.54-.81-2.82-2.25-3.16v-.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.25C9.82 9.84 9 11.12 9 12.66V15H8v1h8v-1zm-3-9.5L6 10v9h12v-9zM12 3l8 6v12H4V9z");
}
</style><path class="v4g6z_bui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-doorbell"} {...others} />);
}

export default Component;
