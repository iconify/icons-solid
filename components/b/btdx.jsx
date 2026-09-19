import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4v7-0b5p.css';
import '../../css/m/md286fbip.css';
import '../../css/c/c7b6r3wqm.css';
import '../../css/x/x3xglccbq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="o4v7-0b5p"/><g class="md286fbip"><path class="c7b6r3wqm"/><path class="x3xglccbq"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:btdx"} {...others} />);
}

export default Component;
