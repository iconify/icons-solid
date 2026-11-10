import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x50wf7bbj.css';
import '../../css/q/qgj3uiscg.css';
import '../../css/g/g92qnxb9i.css';
import '../../css/h/ho0rl5ler.css';
import '../../css/q/qidc0bqma.css';
import '../../css/a/a942ubc4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x50wf7bbj"/><path class="qgj3uiscg"/><path class="g92qnxb9i"/><circle class="ho0rl5ler"/><circle class="qidc0bqma"/><path class="a942ubc4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:trolley"} {...others} />);
}

export default Component;
