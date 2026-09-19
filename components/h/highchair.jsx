import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iot5qp33d.css';

const viewBox = {"width":1024,"height":1792};
const content = `<path class="iot5qp33d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:highchair"} {...others} />);
}

export default Component;
