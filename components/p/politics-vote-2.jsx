import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rwjfk2bkk.css';
import '../../css/v/vewolwq6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rwjfk2bkk"/><path class="vewolwq6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:politics-vote-2"} {...others} />);
}

export default Component;
