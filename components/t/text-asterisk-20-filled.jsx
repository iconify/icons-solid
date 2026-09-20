import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.m54aksb_n {
  fill: currentColor;
  d: path("M10.6 2.5a.6.6 0 1 0-1.2 0v6.052l-4.279-4.28a.6.6 0 1 0-.848.85L8.552 9.4H2.5a.6.6 0 1 0 0 1.2h6.052l-4.279 4.28a.6.6 0 0 0 .849.848L9.4 11.449V17.5a.6.6 0 1 0 1.2 0v-6.05l4.28 4.279a.6.6 0 0 0 .848-.849l-4.279-4.28H17.5a.6.6 0 1 0 0-1.2h-6.05l4.278-4.279a.6.6 0 0 0-.848-.848L10.6 8.552z");
}
</style><path class="m54aksb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-asterisk-20-filled"} {...others} />);
}

export default Component;
