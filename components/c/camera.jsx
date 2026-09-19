import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zvkp0cb3v.css';
import '../../css/e/eepjdcbae.css';
import '../../css/r/rz0qkz6ao.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zvkp0cb3v"/><rect class="eepjdcbae"/><path class="rz0qkz6ao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:camera"} {...others} />);
}

export default Component;
