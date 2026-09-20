import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqapcub6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pqapcub6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-double-alt-arrow-down-bold"} {...others} />);
}

export default Component;
