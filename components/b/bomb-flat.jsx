import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yu8lmhlyf.css';
import '../../css/x/x-lneybgu.css';
import '../../css/c/cqnzudg2w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yu8lmhlyf"/><path class="x-lneybgu"/><path clip-rule="evenodd" class="cqnzudg2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bomb-flat"} {...others} />);
}

export default Component;
