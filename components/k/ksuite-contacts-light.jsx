import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgangomwz.css';
import '../../css/d/d1ft4ebeo.css';
import '../../css/d/dn6qqpqrd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hgangomwz"/><path class="d1ft4ebeo"/><path class="dn6qqpqrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-contacts-light"} {...others} />);
}

export default Component;
