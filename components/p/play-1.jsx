import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp0kc7r6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qp0kc7r6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:play-1"} {...others} />);
}

export default Component;
