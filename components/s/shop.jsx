import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b5fzbzacp.css';
import '../../css/m/m1nd1sl7j.css';
import '../../css/u/ug4rnqbgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b5fzbzacp"/><path class="m1nd1sl7j"/><path class="ug4rnqbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:shop"} {...others} />);
}

export default Component;
