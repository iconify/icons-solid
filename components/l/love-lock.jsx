import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nex2afaxw.css';
import '../../css/d/drkbb0zjj.css';
import '../../css/x/xxi9lkb7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nex2afaxw"/><path class="drkbb0zjj"/><path class="xxi9lkb7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:love-lock"} {...others} />);
}

export default Component;
