import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/p/pw4wz8liw.css';
import '../../css/m/mfbnmqh5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="pw4wz8liw"/><path class="mfbnmqh5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:control-play"} {...others} />);
}

export default Component;
