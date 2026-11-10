import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wna-7rw7t.css';
import '../../css/f/fkjaaab8a.css';
import '../../css/q/qr57uhq0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wna-7rw7t"/><path class="fkjaaab8a"/><path class="qr57uhq0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dron-box"} {...others} />);
}

export default Component;
