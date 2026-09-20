import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qv7tf3b-p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qv7tf3b-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:military-checkpoint"} {...others} />);
}

export default Component;
