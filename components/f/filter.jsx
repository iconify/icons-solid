import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2kh23b7q.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="v2kh23b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:filter"} {...others} />);
}

export default Component;
