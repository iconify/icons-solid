import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnzgb3b_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nnzgb3b_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:captions-solid"} {...others} />);
}

export default Component;
