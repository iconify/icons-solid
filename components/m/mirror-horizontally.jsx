import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/gbi21bx1v.css';
import '../../css/n/ninor2bbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="gbi21bx1v"/><path class="ninor2bbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:mirror-horizontally"} {...others} />);
}

export default Component;
