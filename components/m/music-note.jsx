import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yu7eqjdiz.css';
import '../../css/g/gld13ib1j.css';
import '../../css/r/riw1icuwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow yu7eqjdiz"/><path class="gld13ib1j"/><path class="riw1icuwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:music-note"} {...others} />);
}

export default Component;
