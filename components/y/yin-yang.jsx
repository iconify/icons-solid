import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w03vnhsrv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w03vnhsrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:yin-yang"} {...others} />);
}

export default Component;
