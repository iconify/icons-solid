import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzq4i7b8a.css';
import '../../css/v/vlrw4gbqi.css';
import '../../css/d/dj4zkv6cn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bzq4i7b8a"/><path class="vlrw4gbqi"/><path class="dj4zkv6cn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:air-conditioner-snow"} {...others} />);
}

export default Component;
