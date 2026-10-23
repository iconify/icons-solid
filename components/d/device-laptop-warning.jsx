import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd-q9i0oi.css';
import '../../css/c/cehfxnblf.css';
import '../../css/o/outwenf4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pd-q9i0oi"/><path class="cehfxnblf"/><path class="outwenf4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-laptop-warning"} {...others} />);
}

export default Component;
