import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rslle7b7y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rslle7b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:drop-down"} {...others} />);
}

export default Component;
