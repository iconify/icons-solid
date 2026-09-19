import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxwm93b7c.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gxwm93b7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:document-remove"} {...others} />);
}

export default Component;
