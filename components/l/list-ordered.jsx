import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qb8r96btl.css';
import '../../css/p/ppdjxpb9o.css';
import '../../css/f/fv6jm6szg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qb8r96btl wm-k"/><path class="ppdjxpb9o wm-a"/><path class="fv6jm6szg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:list-ordered"} {...others} />);
}

export default Component;
