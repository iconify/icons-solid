import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hk7cqce6e.css';
import '../../css/w/w4tfkkbql.css';
import '../../css/j/jplvnrbiz.css';
import '../../css/x/xxgrbp8be.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hk7cqce6e"/><path class="w4tfkkbql"/><path class="jplvnrbiz"/><path class="xxgrbp8be"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:diploma-check-badge"} {...others} />);
}

export default Component;
