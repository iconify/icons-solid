import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7765vlsl.css';
import '../../css/q/q51k3abci.css';
import '../../css/k/ke4xsybbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g7765vlsl wm-k"/><path class="q51k3abci wm-k"/><path class="ke4xsybbc wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:luggage"} {...others} />);
}

export default Component;
