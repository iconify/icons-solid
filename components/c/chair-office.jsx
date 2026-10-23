import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4rzi2n8a.css';
import '../../css/b/b8yyhsbiz.css';
import '../../css/y/yj-jouauh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m4rzi2n8a"/><path class="b8yyhsbiz"/><path class="yj-jouauh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chair-office"} {...others} />);
}

export default Component;
