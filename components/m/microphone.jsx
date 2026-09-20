import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yfp7g0-qw.css';
import '../../css/k/kczpjcm2l.css';
import '../../css/y/yiyr5hbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yfp7g0-qw"/><path class="kczpjcm2l"/><path class="yiyr5hbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:microphone"} {...others} />);
}

export default Component;
