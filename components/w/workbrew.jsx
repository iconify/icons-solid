import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8ziwgk5l.css';
import '../../css/e/er7ag9bvb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g8ziwgk5l"/><path class="er7ag9bvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:workbrew"} {...others} />);
}

export default Component;
