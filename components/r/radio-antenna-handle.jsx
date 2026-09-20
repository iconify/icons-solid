import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuj8kqcdw.css';
import '../../css/d/d33yrzbil.css';
import '../../css/l/ls49jcb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kuj8kqcdw"/><path class="d33yrzbil"/><path class="ls49jcb3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:radio-antenna-handle"} {...others} />);
}

export default Component;
