import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a10st2b-y {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0v-6h-2v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V11H4v6a1 1 0 0 1-2 0Zm18 6V4H4v5Zm-3-4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2ZM9 16a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="a10st2b-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:atm-fill-sharp"} {...others} />);
}

export default Component;
