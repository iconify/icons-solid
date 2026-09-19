import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov5v3-62v.css';
import '../../css/h/h-s431bjv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ov5v3-62v"/><path class="h-s431bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sqlalchemy"} {...others} />);
}

export default Component;
