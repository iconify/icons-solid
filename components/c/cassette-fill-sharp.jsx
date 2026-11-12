import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.islk3u_rd {
  fill: currentColor;
  d: path("M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3.857L15 15H9l-2.143 5H3a1 1 0 0 1-1-1Zm3.236 3.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M13 10a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="islk3u_rd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cassette-fill-sharp"} {...others} />);
}

export default Component;
