import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3ywxbc-q.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="o3ywxbc-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:calendar-import"} {...others} />);
}

export default Component;
