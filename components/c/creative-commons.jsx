import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxlnqwbll.css';
import '../../css/o/ooafjrbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxlnqwbll"/><path class="ooafjrbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:creative-commons"} {...others} />);
}

export default Component;
