import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7wqiw03r.css';
import '../../css/y/yooflcckh.css';
import '../../css/s/sn_scbc2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a7wqiw03r"/><path class="yooflcckh"/><path class="sn_scbc2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:stop-circle-duotone"} {...others} />);
}

export default Component;
