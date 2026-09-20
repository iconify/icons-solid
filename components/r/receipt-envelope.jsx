import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/sgdoy1bsc.css';
import '../../css/j/jay0nmyki.css';
import '../../css/n/n7ax7tsfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="sgdoy1bsc"/><path class="jay0nmyki"/><path class="n7ax7tsfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:receipt-envelope"} {...others} />);
}

export default Component;
