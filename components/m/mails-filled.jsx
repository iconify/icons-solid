import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0dyn4o9i.css';
import '../../css/y/yzdgss0oz.css';
import '../../css/t/tdoi1abuv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0dyn4o9i"/><path class="yzdgss0oz"/><path class="tdoi1abuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mails-filled"} {...others} />);
}

export default Component;
