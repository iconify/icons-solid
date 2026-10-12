import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjvf77dtp.css';
import '../../css/a/az3ychbkk.css';
import '../../css/a/asxw-il9i.css';
import '../../css/f/f4tgi5b5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rjvf77dtp"/><path class="az3ychbkk"/><rect class="asxw-il9i"/><ellipse class="f4tgi5b5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hot-air-balloon"} {...others} />);
}

export default Component;
