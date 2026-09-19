import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t63-sob-r.css';
import '../../css/w/wib432g-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t63-sob-r"/><path class="wib432g-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:percent"} {...others} />);
}

export default Component;
