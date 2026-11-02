import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ndcw-pbht {
  fill: currentColor;
  d: path("m9.219 4.672l6 4a4 4 0 0 1 0 6.656l-6 4A4 4 0 0 1 3 16V8a4 4 0 0 1 6.219-3.328M19 19V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0");
}
</style><path class="ndcw-pbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skip-forward-fill-round"} {...others} />);
}

export default Component;
