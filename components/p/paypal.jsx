import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn0c3r6yz.css';
import '../../css/z/zbdow5bzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tn0c3r6yz"/><path class="zbdow5bzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:paypal"} {...others} />);
}

export default Component;
