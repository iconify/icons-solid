import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/egxa_x5_h.css';
import '../../css/y/yyswytbkd.css';
import '../../css/j/jsnbs5b6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="egxa_x5_h"/><path class="yyswytbkd"/><circle class="jsnbs5b6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:rotate-ccw-key"} {...others} />);
}

export default Component;
