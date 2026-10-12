import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7vj0622h.css';
import '../../css/o/o6a_hsykw.css';
import '../../css/h/hmvp54drn.css';
import '../../css/a/az8zj8b2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c7vj0622h"/><path class="o6a_hsykw"/><path class="hmvp54drn"/><path class="az8zj8b2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tag"} {...others} />);
}

export default Component;
