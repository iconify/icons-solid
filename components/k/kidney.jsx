import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wu3r8obcb.css';
import '../../css/n/nh9_vbc8y.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="wu3r8obcb"/><path class="nh9_vbc8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:kidney"} {...others} />);
}

export default Component;
