import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oewbiur4i.css';

const viewBox = {"width":2016,"height":1728};
const content = `<path class="oewbiur4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:volume-on"} {...others} />);
}

export default Component;
