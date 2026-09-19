import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zgknu1b6q {
  fill: currentColor;
  d: path("M18 20H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM6 4h7v5h5v2h2V8l-6-6H6c-1.1 0-2 .9-2 2v7h2zm3 9h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z");
}
</style><path class="zgknu1b6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-insert-page-break"} {...others} />);
}

export default Component;
