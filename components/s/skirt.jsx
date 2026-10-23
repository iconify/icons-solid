import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1jlnjbop.css';
import '../../css/b/b14ix3blp.css';
import '../../css/x/xg6ujvw9o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t1jlnjbop"/><path class="b14ix3blp"/><path class="xg6ujvw9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:skirt"} {...others} />);
}

export default Component;
