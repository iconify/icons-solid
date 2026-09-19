import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u39ugpb2d.css';
import '../../css/y/yyg9mvblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="u39ugpb2d"/><path class="yyg9mvblp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:sofa-outline"} {...others} />);
}

export default Component;
