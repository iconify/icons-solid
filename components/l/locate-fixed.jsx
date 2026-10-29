import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c1y2d4b8i.css';
import '../../css/n/nzqc9xi7w.css';
import '../../css/f/fqcx83brm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="c1y2d4b8i"/><path class="nzqc9xi7w"/><path class="fqcx83brm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:locate-fixed"} {...others} />);
}

export default Component;
