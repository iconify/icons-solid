import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6ue2-jip.css';
import '../../css/y/yy45p2b8q.css';
import '../../css/z/z271pgbsb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e6ue2-jip"/><path class="yy45p2b8q"/><circle class="z271pgbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-tag-manager"} {...others} />);
}

export default Component;
