import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qpy6qcbkb.css';
import '../../css/v/vm-e-smxb.css';
import '../../css/y/y6ia_kbsd.css';
import '../../css/e/ej2dx5iam.css';
import '../../css/o/o33ejebaw.css';
import '../../css/h/hvm0gpbip.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qpy6qcbkb"/><path class="vm-e-smxb"/><path class="y6ia_kbsd"/><path class="ej2dx5iam"/><path class="o33ejebaw"/><path class="hvm0gpbip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:pop-cat-hand-drawn"} {...others} />);
}

export default Component;
