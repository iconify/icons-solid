import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0g6_mb0d.css';
import '../../css/d/d_rjh4bog.css';
import '../../css/f/f45d-jb5s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i0g6_mb0d"/><path class="d_rjh4bog"/><circle class="f45d-jb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:haproxy-cluster-manager"} {...others} />);
}

export default Component;
