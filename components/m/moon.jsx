import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vs18x8bqy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vs18x8bqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:moon"} {...others} />);
}

export default Component;
