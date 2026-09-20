import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/iz71ztbph.css';
import '../../css/q/qtf0zacnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="iz71ztbph"/><path class="qtf0zacnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:feather-pen"} {...others} />);
}

export default Component;
