import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpblz967y.css';
import '../../css/a/a8nv6abtp.css';
import '../../css/o/otdnmtknq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hpblz967y"/><path class="a8nv6abtp"/><path clip-rule="evenodd" class="otdnmtknq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-path-connect-bold-duotone"} {...others} />);
}

export default Component;
