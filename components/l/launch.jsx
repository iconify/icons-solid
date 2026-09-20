import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smxvd6p6i.css';
import '../../css/p/pe_k9tbko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smxvd6p6i"/><path class="pe_k9tbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:launch"} {...others} />);
}

export default Component;
