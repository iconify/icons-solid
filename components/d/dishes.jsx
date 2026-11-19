import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f07d7bzst.css';
import '../../css/m/mem6ubrko.css';
import '../../css/b/b267k5bhl.css';
import '../../css/g/gmxcnn7ez.css';
import '../../css/j/j_gd3___w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f07d7bzst"/><circle class="mem6ubrko"/><path class="b267k5bhl"/><circle class="gmxcnn7ez"/><path class="j_gd3___w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dishes"} {...others} />);
}

export default Component;
