import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpsyw0ehr.css';
import '../../css/i/io_v3whei.css';
import '../../css/s/sn4d4xbib.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xpsyw0ehr"/><path class="io_v3whei"/><path class="sn4d4xbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:whodb-dark"} {...others} />);
}

export default Component;
