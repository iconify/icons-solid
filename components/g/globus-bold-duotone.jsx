import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnuscxboo.css';
import '../../css/o/o44bltb0y.css';
import '../../css/x/xuokrglbz.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="fnuscxboo"/><path class="o44bltb0y"/><path clip-rule="evenodd" class="xuokrglbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:globus-bold-duotone"} {...others} />);
}

export default Component;
