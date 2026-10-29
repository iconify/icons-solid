import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fip4tbboc.css';
import '../../css/h/h_eof1loy.css';
import '../../css/t/tmtoxorob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fip4tbboc"/><path class="h_eof1loy"/><path class="tmtoxorob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:shovel"} {...others} />);
}

export default Component;
