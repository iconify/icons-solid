import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oxxiftbjx {
  fill: currentColor;
  d: path("M17.23 5.733q-.73-.728-.73-1.77t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732t-1.771-.729M3 20.077V3h11.6q-.061.25-.071.49t-.006.51q.08 1.956 1.379 3.209Q17.2 8.46 19 8.46q.512 0 1.027-.125T21 7.961V17H6.077z");
}
</style><path class="oxxiftbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mark-chat-unread-sharp"} {...others} />);
}

export default Component;
