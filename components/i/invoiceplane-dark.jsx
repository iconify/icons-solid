import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt9ppcjum.css';
import '../../css/a/au4zb9b5u.css';
import '../../css/z/zeq616bts.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yt9ppcjum"/><path class="au4zb9b5u"/><path class="zeq616bts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:invoiceplane-dark"} {...others} />);
}

export default Component;
