import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tfy-5hqci.css';
import '../../css/x/x0u_kcboi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tfy-5hqci"/><path class="x0u_kcboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kmd"} {...others} />);
}

export default Component;
