import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9829zbae.css';
import '../../css/w/w2z25bodf.css';
import '../../css/z/zhr3beibw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c9829zbae"/><path class="w2z25bodf"/><path class="zhr3beibw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:projector"} {...others} />);
}

export default Component;
