import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lgn46h21v.css';
import '../../css/o/oai5is-6o.css';

const viewBox = {"width":128,"height":128};
const content = `<rect class="cuyn6tgcc"/><g class="cuyn6tgcc"><path class="lgn46h21v"/><g transform="translate(-18.436 -431.962)"><circle/><path class="oai5is-6o"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:uwsgi"} {...others} />);
}

export default Component;
