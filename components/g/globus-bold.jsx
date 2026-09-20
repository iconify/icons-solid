import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_xc6ub8v.css';
import '../../css/u/unxgk-kjr.css';
import '../../css/x/xuokrglbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_xc6ub8v"/><path class="unxgk-kjr"/><path clip-rule="evenodd" class="xuokrglbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:globus-bold"} {...others} />);
}

export default Component;
