import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3307tvyz.css';
import '../../css/k/k-26i9t5a.css';
import '../../css/o/ox9d4xb-r.css';
import '../../css/e/ei2jfbu1i.css';
import '../../css/p/pmk90re9y.css';
import '../../css/c/c0so7cc9u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w3307tvyz"/><circle class="k-26i9t5a"/><path class="ox9d4xb-r"/><path class="ei2jfbu1i"/><path class="pmk90re9y"/><circle class="c0so7cc9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:capacitarr-light"} {...others} />);
}

export default Component;
