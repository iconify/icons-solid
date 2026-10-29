import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/thi2wbcsz.css';
import '../../css/q/qw3cslx4k.css';
import '../../css/s/spev02xtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="thi2wbcsz"/><path class="qw3cslx4k wm-a"/><path class="spev02xtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:motorcycle-duo"} {...others} />);
}

export default Component;
