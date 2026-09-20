import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb6b2hb8b.css';
import '../../css/g/gcoha---j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jb6b2hb8b"/><path class="gcoha---j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:web-check"} {...others} />);
}

export default Component;
