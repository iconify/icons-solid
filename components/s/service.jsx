import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggq2mybwo.css';
import '../../css/v/v634cj9dd.css';
import '../../css/d/dv205fjsw.css';
import '../../css/p/p0h4cybqn.css';

const viewBox = {"width":2000,"height":2000};
const content = `<path class="ggq2mybwo"/><g transform="translate(91.594 974.827)scale(1.11612)" class="v634cj9dd"><path class="dv205fjsw"/><ellipse class="p0h4cybqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:service"} {...others} />);
}

export default Component;
