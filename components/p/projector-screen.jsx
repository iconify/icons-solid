import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/mqftf9b7u.css';
import '../../css/v/vz3gnmb6z.css';
import '../../css/a/ah_4sn46y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="mqftf9b7u"/><path class="vz3gnmb6z"/><path class="ah_4sn46y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:projector-screen"} {...others} />);
}

export default Component;
