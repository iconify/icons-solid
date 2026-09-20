import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj5jgybpj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oj5jgybpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:flask-empty-off-outline"} {...others} />);
}

export default Component;
