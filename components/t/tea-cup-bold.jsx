import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/py52tgb9q.css';
import '../../css/g/g6hqg8bur.css';
import '../../css/a/am2robbdt.css';
import '../../css/s/snz9nhb8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="py52tgb9q"/><path class="g6hqg8bur"/><path class="am2robbdt"/><path class="snz9nhb8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tea-cup-bold"} {...others} />);
}

export default Component;
