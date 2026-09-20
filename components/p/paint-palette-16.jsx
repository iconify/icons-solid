import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idcnk1b5s.css';
import '../../css/x/xqadazbcn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="idcnk1b5s"/><path clip-rule="evenodd" class="xqadazbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:paint-palette-16"} {...others} />);
}

export default Component;
