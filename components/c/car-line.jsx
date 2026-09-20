import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g88jb2prf.css';
import '../../css/s/s7tj_nz1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g88jb2prf"/><path class="s7tj_nz1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:car-line"} {...others} />);
}

export default Component;
