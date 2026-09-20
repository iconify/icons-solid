import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmqdv8bhv.css';
import '../../css/p/pqncy4b2j.css';
import '../../css/z/z7h6iq1vh.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="kmqdv8bhv"/><path class="pqncy4b2j"/><path class="z7h6iq1vh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:uml"} {...others} />);
}

export default Component;
