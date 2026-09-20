import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j42fu2bgj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j42fu2bgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:valve-closed"} {...others} />);
}

export default Component;
