import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whos6rb2r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/isi1qib1r.css';
import '../../css/s/s3nyo48-h.css';
import '../../css/b/bd5b3md5g.css';
import '../../css/d/d-qr89e0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary whos6rb2r"/><g class="dt0cm9dhy primary"><path class="isi1qib1r"/><path class="s3nyo48-h"/><path class="bd5b3md5g"/><path class="d-qr89e0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gpu-duo"} {...others} />);
}

export default Component;
