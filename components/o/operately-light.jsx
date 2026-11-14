import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whdlzbczh.css';
import '../../css/v/vas3oxb4y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="whdlzbczh"/><path class="vas3oxb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:operately-light"} {...others} />);
}

export default Component;
