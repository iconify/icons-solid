import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6mx-ub2l.css';
import '../../css/i/iru6fdc4v.css';
import '../../css/m/mq3t55bue.css';
import '../../css/m/m4wse617w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p6mx-ub2l"/><path class="iru6fdc4v"/><path class="mq3t55bue"/><path class="m4wse617w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:data-layers"} {...others} />);
}

export default Component;
