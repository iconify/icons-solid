import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj1abhbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hj1abhbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diskette-outline"} {...others} />);
}

export default Component;
