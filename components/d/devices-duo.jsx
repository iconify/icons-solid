import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mholko41n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b69dij5rx.css';
import '../../css/m/muxrmeneg.css';
import '../../css/o/oqmofb2lj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mholko41n secondary"/><g class="dt0cm9dhy primary"><path class="b69dij5rx"/><path class="muxrmeneg"/><path class="oqmofb2lj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:devices-duo"} {...others} />);
}

export default Component;
