import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0cfcrpql.css';
import '../../css/t/t-b8inb6f.css';
import '../../css/l/l5nlj20ve.css';
import '../../css/y/ymso5wbov.css';
import '../../css/f/fuili0tsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q0cfcrpql"/><path class="t-b8inb6f"/><path class="l5nlj20ve"/><path class="ymso5wbov"/><path class="fuili0tsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:outdoors-flashlight-2"} {...others} />);
}

export default Component;
