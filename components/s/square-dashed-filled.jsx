import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8zhk6byk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8zhk6byk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:square-dashed-filled"} {...others} />);
}

export default Component;
