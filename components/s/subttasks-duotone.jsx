import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/j/jisnx7b0h.css';
import '../../css/i/iesglkbjm.css';
import '../../css/y/y_vvfqmcp.css';
import '../../css/g/gph2l2k-x.css';
import '../../css/u/u3i10hqhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><rect transform="rotate(90 18 9)" class="jisnx7b0h"/><rect transform="rotate(90 18 17)" class="iesglkbjm"/><rect transform="rotate(-90 3 7)" class="y_vvfqmcp"/><path class="gph2l2k-x"/><path class="u3i10hqhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:subttasks-duotone"} {...others} />);
}

export default Component;
