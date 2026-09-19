import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ak8q7sy8o.css';
import '../../css/h/h_267dbvz.css';
import '../../css/y/y650zr1fk.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ak8q7sy8o"/><path class="h_267dbvz"/><path class="y650zr1fk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:nf"} {...others} />);
}

export default Component;
