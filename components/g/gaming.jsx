import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7v4o8g4h.css';
import '../../css/o/o8973hbfi.css';
import '../../css/c/cd-k0ccfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7v4o8g4h"/><path class="o8973hbfi"/><path class="cd-k0ccfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:gaming"} {...others} />);
}

export default Component;
