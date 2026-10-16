import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgljnwlus.css';
import '../../css/s/stlc3bbfz.css';

const viewBox = {"width":192.46,"height":222.23};
const content = `<path class="jgljnwlus"/><path class="stlc3bbfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tikv"} {...others} />);
}

export default Component;
