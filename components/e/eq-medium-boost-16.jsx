import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjfor6daa.css';
import '../../css/y/y2ppayb0y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gjfor6daa"/><path class="y2ppayb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:eq-medium-boost-16"} {...others} />);
}

export default Component;
