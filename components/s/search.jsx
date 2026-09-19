import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/w/w14-s-b-s.css';
import '../../css/r/rga8t9bxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="w14-s-b-s"/><path class="rga8t9bxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:search"} {...others} />);
}

export default Component;
