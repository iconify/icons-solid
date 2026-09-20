import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltul2qcel.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ltul2qcel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:semicolon"} {...others} />);
}

export default Component;
