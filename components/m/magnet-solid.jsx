import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxn3t907l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxn3t907l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:magnet-solid"} {...others} />);
}

export default Component;
