import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwxx7l1ub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwxx7l1ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shield-lock-round"} {...others} />);
}

export default Component;
