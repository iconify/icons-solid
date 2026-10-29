import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m9yyux_le.css';
import '../../css/g/gnvimeb0v.css';
import '../../css/u/u07rftbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m9yyux_le"/><path class="gnvimeb0v"/><path class="u07rftbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:tree-deciduous"} {...others} />);
}

export default Component;
