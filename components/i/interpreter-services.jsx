import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8smtgk6n.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="i8smtgk6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:interpreter-services"} {...others} />);
}

export default Component;
