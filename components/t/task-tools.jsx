import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogt714bjg.css';
import '../../css/t/trltflb5m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ogt714bjg"/><path class="trltflb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:task-tools"} {...others} />);
}

export default Component;
