import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt4lrqb6u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qt4lrqb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:level-up"} {...others} />);
}

export default Component;
