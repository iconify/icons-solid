import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp85bwqhm.css';
import '../../css/c/cftdehb-j.css';
import '../../css/h/h5wru_h7y.css';
import '../../css/e/e6mrdirfz.css';
import '../../css/c/cp41-4ybv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wp85bwqhm"/><path class="cftdehb-j"/><path class="h5wru_h7y"/><path class="e6mrdirfz"/><path class="cp41-4ybv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-ordered-minimalistic-outline"} {...others} />);
}

export default Component;
