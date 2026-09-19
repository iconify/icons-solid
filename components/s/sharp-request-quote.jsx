import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tbg8xfb6q {
  fill: currentColor;
  d: path("M14 2H4v20h16V8zm1 10h-4v1h4v5h-2v1h-2v-1H9v-2h4v-1H9v-5h2V9h2v1h2zm-2-4V3.5L17.5 8z");
}
</style><path class="tbg8xfb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-request-quote"} {...others} />);
}

export default Component;
