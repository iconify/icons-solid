import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rthg1qbbx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rthg1qbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:m87"} {...others} />);
}

export default Component;
