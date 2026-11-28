import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_ok3bclj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_ok3bclj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:align-vertical-space-between-solid"} {...others} />);
}

export default Component;
