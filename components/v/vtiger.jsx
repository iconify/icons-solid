import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2wq_1rqv.css';

const viewBox = {"width":1024,"height":704};
const content = `<path class="y2wq_1rqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:vtiger"} {...others} />);
}

export default Component;
