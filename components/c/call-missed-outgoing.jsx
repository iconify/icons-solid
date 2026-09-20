import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d1jxvubqk {
  fill: currentColor;
  d: path("m12 17.425l-9-9L4.4 7l7.6 7.6L17.6 9H13V7h8v8h-2v-4.575z");
}
</style><path class="d1jxvubqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:call-missed-outgoing"} {...others} />);
}

export default Component;
