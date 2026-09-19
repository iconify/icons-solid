import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ccrml5b8u.css';
import '../../css/h/h96o6wbao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bi12bsetm"><path class="ccrml5b8u"/><path class="h96o6wbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:qr"} {...others} />);
}

export default Component;
