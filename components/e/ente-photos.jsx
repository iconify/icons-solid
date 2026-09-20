import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olhorlhrj.css';
import '../../css/k/k_zqql6xy.css';
import '../../css/n/nhcbp3bdb.css';
import '../../css/d/d8qet0omc.css';
import '../../css/x/xig01du4t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="olhorlhrj"/><path class="k_zqql6xy"/><path class="nhcbp3bdb"/><path class="d8qet0omc"/><path class="xig01du4t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-photos"} {...others} />);
}

export default Component;
