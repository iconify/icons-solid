import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxzkr4y1y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xxzkr4y1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:roller-skate"} {...others} />);
}

export default Component;
