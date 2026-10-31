import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/f_sv_ylzn.css';
import '../../css/b/bqueagbgq.css';
import '../../css/i/ixdel4vqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="f_sv_ylzn wm-shadow"/><path class="bqueagbgq wm-shadow"/><path class="ixdel4vqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:lasso"} {...others} />);
}

export default Component;
