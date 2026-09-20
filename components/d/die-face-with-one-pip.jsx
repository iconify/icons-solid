import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulry8uluz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ulry8uluz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:die-face-with-one-pip"} {...others} />);
}

export default Component;
