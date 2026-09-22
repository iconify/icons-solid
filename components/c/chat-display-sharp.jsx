import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z0c13l3xt {
  fill: currentColor;
  d: path("M11 22v-8h11v8zm2-2h7v-4h-7zm-7-9h12V9H6zm0-3h12V6H6zm3 10H6l-4 4V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v8H6v2h3z");
}
</style><path class="z0c13l3xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chat-display-sharp"} {...others} />);
}

export default Component;
