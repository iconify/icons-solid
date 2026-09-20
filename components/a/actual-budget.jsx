import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fio3r8-yl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fio3r8-yl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:actual-budget"} {...others} />);
}

export default Component;
