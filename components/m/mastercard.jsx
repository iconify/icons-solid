import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p6e59ac-l.css';
import '../../css/s/shnlydb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><circle class="p6e59ac-l"/><circle class="shnlydb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:mastercard"} {...others} />);
}

export default Component;
