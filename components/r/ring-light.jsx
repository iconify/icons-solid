import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qw0p5qogt.css';
import '../../css/q/q212p1b1w.css';
import '../../css/r/r05wzkk_i.css';
import '../../css/x/xtvlw3nak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qw0p5qogt"/><path class="q212p1b1w"/><path class="r05wzkk_i"/><path class="xtvlw3nak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ring-light"} {...others} />);
}

export default Component;
