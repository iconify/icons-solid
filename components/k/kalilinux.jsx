import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jajfe5b9c.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="jajfe5b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kalilinux"} {...others} />);
}

export default Component;
