import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yi_ml2bts.css';
import '../../css/f/frw1ezbng.css';

const viewBox = {"width":1200,"height":1200};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yi_ml2bts"/><path class="frw1ezbng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:plurk-alt"} {...others} />);
}

export default Component;
