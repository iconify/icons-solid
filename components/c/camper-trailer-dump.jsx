import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob72q5bva.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ob72q5bva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:camper-trailer-dump"} {...others} />);
}

export default Component;
