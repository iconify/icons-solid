import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rjl-osbit.css';
import '../../css/f/feh9g0bqf.css';
import '../../css/j/jmd8w56ud.css';
import '../../css/g/gvcn7xpex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rjl-osbit"/><rect class="feh9g0bqf"/><rect class="jmd8w56ud"/><rect class="gvcn7xpex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:diagram-flow-horizontal"} {...others} />);
}

export default Component;
