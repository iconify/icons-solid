import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/civ9npw1v.css';

const viewBox = {"width":1664,"height":1472};
const content = `<path class="civ9npw1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:table-alt"} {...others} />);
}

export default Component;
