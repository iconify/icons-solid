import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpfv3y81q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cpfv3y81q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:view-column"} {...others} />);
}

export default Component;
