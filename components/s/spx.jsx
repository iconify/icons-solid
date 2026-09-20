import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qapg4nbep.css';
import '../../css/r/rk99s4m6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qapg4nbep"/><path class="rk99s4m6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:spx"} {...others} />);
}

export default Component;
