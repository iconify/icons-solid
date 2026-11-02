import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pb8xb_bsx {
  fill: currentColor;
  d: path("M2 8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5Zm18 0a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v4h1c1.317 0 2.748.335 3.707 1.293l1 1c.948.948 3.638.948 4.586 0l1-1C16.252 12.335 17.683 12 19 12h1Z");
}
</style><path class="pb8xb_bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:inbox-fill-round"} {...others} />);
}

export default Component;
