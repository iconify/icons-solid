import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz2fis0uk.css';
import '../../css/v/v2kg9llkn.css';
import '../../css/z/z0e_fjb2q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nz2fis0uk"/><path class="v2kg9llkn"/><path class="z0e_fjb2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:whodb-light"} {...others} />);
}

export default Component;
