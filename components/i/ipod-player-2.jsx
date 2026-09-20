import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/ldtcomb8y.css';
import '../../css/f/fxsp8ybww.css';
import '../../css/d/dbp8e1bni.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ldtcomb8y"/><path class="fxsp8ybww"/><path class="dbp8e1bni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:ipod-player-2"} {...others} />);
}

export default Component;
