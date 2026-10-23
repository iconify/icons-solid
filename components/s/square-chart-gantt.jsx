import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bysvin3rw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bysvin3rw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:square-chart-gantt"} {...others} />);
}

export default Component;
