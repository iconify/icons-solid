import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfd-gok6c.css';
import '../../css/g/g369r0bza.css';
import '../../css/f/flo-2gl9v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wfd-gok6c"/><path class="g369r0bza"/><path class="flo-2gl9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:running"} {...others} />);
}

export default Component;
