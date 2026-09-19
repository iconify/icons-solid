import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf-21-0mo.css';
import '../../css/d/dum7nab_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gf-21-0mo"/><path class="dum7nab_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:medal"} {...others} />);
}

export default Component;
