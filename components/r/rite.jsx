import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7eyqi9kg.css';
import '../../css/e/eujo24bzi.css';
import '../../css/h/h13wcxb2s.css';
import '../../css/h/h7dqv975i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g7eyqi9kg"/><path class="eujo24bzi"/><path class="h13wcxb2s"/><path class="h7dqv975i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rite"} {...others} />);
}

export default Component;
