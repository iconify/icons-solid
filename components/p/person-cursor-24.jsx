import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz47_7v9x.css';
import '../../css/n/n9qbr_l5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yz47_7v9x"/><path class="n9qbr_l5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:person-cursor-24"} {...others} />);
}

export default Component;
