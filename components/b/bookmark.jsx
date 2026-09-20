import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9hwx3hly.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};
const content = `<path class="x9hwx3hly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:bookmark"} {...others} />);
}

export default Component;
