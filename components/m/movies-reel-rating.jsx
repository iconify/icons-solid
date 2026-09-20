import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/id5b96b_s.css';
import '../../css/q/qvhu7ob2r.css';
import '../../css/b/b1dzrsyqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="id5b96b_s"/><path class="qvhu7ob2r"/><path class="b1dzrsyqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:movies-reel-rating"} {...others} />);
}

export default Component;
