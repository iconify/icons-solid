import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-kxsrb9g.css';
import '../../css/p/p95i-wx8z.css';
import '../../css/p/ph59cpb5r.css';
import '../../css/z/z-zvb7beo.css';
import '../../css/c/c_dyy5bhc.css';
import '../../css/l/lsbr0ofnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l-kxsrb9g"/><path class="p95i-wx8z"/><path class="ph59cpb5r"/><path class="z-zvb7beo"/><path class="c_dyy5bhc"/><path class="lsbr0ofnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:network-refresh"} {...others} />);
}

export default Component;
