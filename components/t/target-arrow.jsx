import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vfs6fvb9z.css';
import '../../css/f/feitoabjv.css';
import '../../css/y/y_ctxhbbn.css';
import '../../css/c/cialmtt2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vfs6fvb9z"/><path class="feitoabjv"/><path class="y_ctxhbbn"/><path class="cialmtt2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:target-arrow"} {...others} />);
}

export default Component;
