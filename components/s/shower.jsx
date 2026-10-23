import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/digho9b-m.css';
import '../../css/l/l4qo8tagq.css';
import '../../css/x/x-u481b5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="digho9b-m"/><path class="l4qo8tagq"/><path class="x-u481b5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shower"} {...others} />);
}

export default Component;
