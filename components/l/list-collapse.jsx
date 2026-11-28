import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1i2iw-bc.css';
import '../../css/c/c5_8_gb4c.css';
import '../../css/s/s8ub28b-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="d1i2iw-bc"/><path class="c5_8_gb4c"/><path class="s8ub28b-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:list-collapse"} {...others} />);
}

export default Component;
