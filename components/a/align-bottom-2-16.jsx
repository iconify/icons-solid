import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo0pu5bsa.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uo0pu5bsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:align-bottom-2-16"} {...others} />);
}

export default Component;
