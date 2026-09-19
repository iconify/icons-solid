import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mro34mbsj.css';

const viewBox = {"width":992,"height":1280};
const content = `<g transform="translate(992 0) scale(-1 1)"><path class="mro34mbsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:angle-double-right"} {...others} />);
}

export default Component;
