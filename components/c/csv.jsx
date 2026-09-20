import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw4tx68rp.css';
import '../../css/r/rqc7mdb1v.css';
import '../../css/c/cpgwot4ac.css';
import '../../css/v/v8ai3lb5n.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="hw4tx68rp"/><path class="rqc7mdb1v"/><path class="cpgwot4ac"/><path class="v8ai3lb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:csv"} {...others} />);
}

export default Component;
