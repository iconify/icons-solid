import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev9-qvtll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ev9-qvtll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:check-circle"} {...others} />);
}

export default Component;
