import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pchupzqhj.css';
import '../../css/h/hg71ebcsy.css';
import '../../css/c/c5skm7bip.css';
import '../../css/j/jeup4er5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="pchupzqhj"/><path class="hg71ebcsy"/><path class="c5skm7bip"/><path class="jeup4er5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:hard-drive-warning"} {...others} />);
}

export default Component;
