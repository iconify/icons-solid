import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw_mxsb9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yw_mxsb9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:alarm-solid"} {...others} />);
}

export default Component;
