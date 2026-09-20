import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ctold-yvc.css';
import '../../css/x/x-ob6xq0l.css';
import '../../css/a/az5uuwbxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ctold-yvc"/><path class="x-ob6xq0l"/><path class="az5uuwbxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:phone-personal-hotspot"} {...others} />);
}

export default Component;
