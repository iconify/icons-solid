import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hquelcb9e {
  fill: currentColor;
  d: path("M9 3L5 6.99h3V14h2V6.99h3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99z");
}
</style><path class="hquelcb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-import-export"} {...others} />);
}

export default Component;
