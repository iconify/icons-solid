import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.a_w_gsogs {
  fill: currentColor;
  d: path("M2 5.75A2.75 2.75 0 0 1 4.75 3h.75a.75.75 0 0 1 0 1.5h-.75c-.69 0-1.25.56-1.25 1.25v.75a.75.75 0 0 1-1.5 0zm11.75-2A.75.75 0 0 1 14.5 3h.75A2.75 2.75 0 0 1 18 5.75v.75a.75.75 0 0 1-1.5 0v-.75c0-.69-.56-1.25-1.25-1.25h-.75a.75.75 0 0 1-.75-.75m-11 9a.75.75 0 0 1 .75.75v.75c0 .69.56 1.25 1.25 1.25h.75a.75.75 0 0 1 0 1.5h-.75A2.75 2.75 0 0 1 2 14.25v-.75a.75.75 0 0 1 .75-.75m14.5 0a.75.75 0 0 1 .75.75v.75A2.75 2.75 0 0 1 15.25 17h-.75a.75.75 0 0 1 0-1.5h.75c.69 0 1.25-.56 1.25-1.25v-.75a.75.75 0 0 1 .75-.75M5.5 6a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 5.5 6m3.75.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zM11.5 6a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 11.5 6m3.75.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="a_w_gsogs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:barcode-scanner-20-filled"} {...others} />);
}

export default Component;
