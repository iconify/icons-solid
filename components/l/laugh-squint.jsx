import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik69wfwmd.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="ik69wfwmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:laugh-squint"} {...others} />);
}

export default Component;
