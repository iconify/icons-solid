import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h63q1abgr.css';
import '../../css/g/g74ykvjvs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h63q1abgr"/><path class="g74ykvjvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:koel-dark"} {...others} />);
}

export default Component;
