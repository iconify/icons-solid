import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdvu4gb8k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdvu4gb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:penis-outline-24px"} {...others} />);
}

export default Component;
