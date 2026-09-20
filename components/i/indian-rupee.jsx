import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coeb_wbxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="coeb_wbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:indian-rupee"} {...others} />);
}

export default Component;
