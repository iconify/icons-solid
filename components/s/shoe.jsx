import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ro7u9-xwx.css';
import '../../css/m/mkwnvz-0j.css';
import '../../css/n/ngik8bc5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ro7u9-xwx"/><path class="mkwnvz-0j"/><path class="ngik8bc5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shoe"} {...others} />);
}

export default Component;
