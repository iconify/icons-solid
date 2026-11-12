import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcnly3b_c.css';
import '../../css/g/gtz84wbsv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pcnly3b_c"/><path class="gtz84wbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:open-dronelog"} {...others} />);
}

export default Component;
