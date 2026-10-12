import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xckdb_rmw.css';
import '../../css/d/dau5oxg5b.css';
import '../../css/y/yufc7rbuh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xckdb_rmw"/><path class="dau5oxg5b"/><path class="yufc7rbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-archive-filled"} {...others} />);
}

export default Component;
