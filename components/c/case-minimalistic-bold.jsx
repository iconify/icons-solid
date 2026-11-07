import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnj8zni5c.css';
import '../../css/q/qo_wu9b5d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nnj8zni5c"/><path clip-rule="evenodd" class="qo_wu9b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-minimalistic-bold"} {...others} />);
}

export default Component;
