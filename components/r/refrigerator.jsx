import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yhqb79b7v.css';
import '../../css/g/g4l74r9em.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="yhqb79b7v"/><path class="g4l74r9em"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:refrigerator"} {...others} />);
}

export default Component;
