import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5fwk0b8u.css';
import '../../css/v/vpqnk6b6e.css';
import '../../css/p/pj4q9cj7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z5fwk0b8u"/><path class="vpqnk6b6e"/><path class="pj4q9cj7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-cap-round"} {...others} />);
}

export default Component;
