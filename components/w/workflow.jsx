import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fckdq6bfn.css';
import '../../css/v/vafut1lep.css';
import '../../css/q/qgdjmdbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="fckdq6bfn"/><path class="vafut1lep"/><path class="qgdjmdbhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:workflow"} {...others} />);
}

export default Component;
