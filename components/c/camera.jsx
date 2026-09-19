import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/z/zvkp0cb3v.css';
import '../../css/e/eepjdcbae.css';
import '../../css/r/rz0qkz6ao.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGe3BNDcvY"><g class="ylrso7y3c"><path class="zvkp0cb3v"/><rect class="eepjdcbae"/><path class="rz0qkz6ao"/></g></mask></defs><path mask="url(#SVGe3BNDcvY)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:camera"} {...others} />);
}

export default Component;
