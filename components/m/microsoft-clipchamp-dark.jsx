import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhap3dbvq.css';
import '../../css/b/bheb3jb6o.css';
import '../../css/k/kxuh6j-9t.css';
import '../../css/g/gqxfigb8q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xhap3dbvq"/><path class="bheb3jb6o"/><path class="kxuh6j-9t"/><path class="gqxfigb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-clipchamp-dark"} {...others} />);
}

export default Component;
