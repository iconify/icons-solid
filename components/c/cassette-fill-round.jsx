import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zlframi7p {
  fill: currentColor;
  d: path("M7 4h10a5 5 0 0 1 5 5v6a5 5 0 0 1-4.858 4.998L15 15H9l-2.142 4.998A5 5 0 0 1 2 15V9a5 5 0 0 1 5-5M5.236 8.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M13 10a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="zlframi7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cassette-fill-round"} {...others} />);
}

export default Component;
