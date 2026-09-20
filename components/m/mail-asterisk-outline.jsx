import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xfmua2ubo {
  fill: currentColor;
  d: path("m12 11l8-5H4zm-8 9q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v7h-2V8l-8 5l-8-5v10h9v2zm13.875 2.95l-1.75-1l1.15-1.95H15v-2h2.275l-1.15-1.95l1.75-1L19 17l1.125-1.95l1.75 1l-1.15 1.95H23v2h-2.275l1.15 1.95l-1.75 1L19 21z");
}
</style><path class="xfmua2ubo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mail-asterisk-outline"} {...others} />);
}

export default Component;
