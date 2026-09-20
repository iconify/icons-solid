import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_osj0ijb.css';
import '../../css/h/h7n9wpcnw.css';
import '../../css/j/jb0hwxb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_osj0ijb"/><path clip-rule="evenodd" class="h7n9wpcnw"/><path clip-rule="evenodd" class="jb0hwxb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:emoji-grin"} {...others} />);
}

export default Component;
