import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub35knbuk.css';
import '../../css/d/d_qmu7ifq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ub35knbuk"/><path class="d_qmu7ifq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:teer"} {...others} />);
}

export default Component;
