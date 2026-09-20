import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc-9hvxgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uc-9hvxgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:heartbeat"} {...others} />);
}

export default Component;
