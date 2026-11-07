import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6wcrsuxf.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/td2shabyo.css';
import '../../css/y/ymvj8abtr.css';
import '../../css/i/i8124czcp.css';
import '../../css/n/nu47jjbnm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d6wcrsuxf"/><g class="xtpeb-edw"><path class="td2shabyo"/><path class="ymvj8abtr"/><path class="i8124czcp"/><path class="nu47jjbnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-bold-duotone"} {...others} />);
}

export default Component;
