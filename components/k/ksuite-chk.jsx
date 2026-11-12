import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx1ed53-h.css';
import '../../css/k/kmzi6e6ft.css';
import '../../css/j/josq1jb8s.css';
import '../../css/y/yjwzayklo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jx1ed53-h"/><path class="kmzi6e6ft"/><path class="josq1jb8s"/><path class="yjwzayklo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-chk"} {...others} />);
}

export default Component;
