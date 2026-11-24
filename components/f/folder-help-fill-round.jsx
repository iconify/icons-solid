import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ucl91yujo {
  fill: currentColor;
  d: path("M12.414 5H17a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5V6a3 3 0 0 1 3-3h5c.265 0 .52.105.707.293Zm-3.178 5.832A3 3 0 0 0 9 12a1 1 0 0 0 2 0a1.001 1.001 0 0 1 1.707-.707a1 1 0 0 1 .215 1.094A.99.99 0 0 1 12 13a1 1 0 0 0 0 2a3 3 0 1 0-2.764-4.168M12.01 16H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="ucl91yujo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-help-fill-round"} {...others} />);
}

export default Component;
