import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt_ry7bgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pt_ry7bgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:backward"} {...others} />);
}

export default Component;
