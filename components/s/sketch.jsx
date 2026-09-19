import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/c/c0nek6qtv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMI25Wb1H"><g class="ylrso7y3c"><rect class="r8cyu3bwz"/><path class="c0nek6qtv"/></g></mask></defs><path mask="url(#SVGMI25Wb1H)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sketch"} {...others} />);
}

export default Component;
