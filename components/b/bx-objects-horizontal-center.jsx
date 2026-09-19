import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-51zibyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l-51zibyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-objects-horizontal-center"} {...others} />);
}

export default Component;
