import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h96oc06ai.css';
import '../../css/s/srkn7eb3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h96oc06ai"/><path class="srkn7eb3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:stethoscope-alt"} {...others} />);
}

export default Component;
