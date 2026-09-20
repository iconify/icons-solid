import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wx6cf-bmk.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="wx6cf-bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:puzzle-piece"} {...others} />);
}

export default Component;
