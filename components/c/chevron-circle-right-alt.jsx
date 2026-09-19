import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb6wl9bmp.css';
import '../../css/b/b56j2525l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kb6wl9bmp"/><path class="b56j2525l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:chevron-circle-right-alt"} {...others} />);
}

export default Component;
