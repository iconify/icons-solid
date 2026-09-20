import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp8z5tbdw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yp8z5tbdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-using-terminal-kiosk-with-dollar"} {...others} />);
}

export default Component;
