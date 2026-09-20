import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yz39ln45e.css';
import '../../css/h/h9d5tsxid.css';
import '../../css/z/zomz06otq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yz39ln45e"/><path class="h9d5tsxid"/><path class="zomz06otq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:allowances-no-bicycles-sign"} {...others} />);
}

export default Component;
