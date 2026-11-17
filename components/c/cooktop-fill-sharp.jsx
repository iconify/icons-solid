import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.df3rh7u9l {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm3.236 3.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M13 8a3 3 0 1 0 6 0a3 3 0 0 0-6 0M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0M5 16v.001a3 3 0 1 0 6 0A3 3 0 0 0 5 16m8 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m8 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0");
}
</style><path class="df3rh7u9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cooktop-fill-sharp"} {...others} />);
}

export default Component;
