import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pg1t_dv8x.css';
import '../../css/c/cgf21cybt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pg1t_dv8x"/><path clip-rule="evenodd" class="cgf21cybt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:file-download-outline"} {...others} />);
}

export default Component;
