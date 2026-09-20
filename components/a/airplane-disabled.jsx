import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/cquoizaco.css';
import '../../css/x/xtgd8w0jx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="cquoizaco"/><path class="xtgd8w0jx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:airplane-disabled"} {...others} />);
}

export default Component;
