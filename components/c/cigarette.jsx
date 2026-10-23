import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnlo_9ctj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gnlo_9ctj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cigarette"} {...others} />);
}

export default Component;
