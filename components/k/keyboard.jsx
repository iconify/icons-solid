import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa3e_ihor.css';
import '../../css/s/ss1-wab0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pa3e_ihor"/><path class="ss1-wab0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:keyboard"} {...others} />);
}

export default Component;
