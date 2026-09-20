import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp3wj_j1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tp3wj_j1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:transfer-long-down-light"} {...others} />);
}

export default Component;
