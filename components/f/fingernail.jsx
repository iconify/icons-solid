import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nn4_--rny.css';
import '../../css/g/g7qlcfhvp.css';
import '../../css/m/mj3l5tb6u.css';
import '../../css/x/x9avr_b1n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlocXbbMI"><g class="rohhhzb0l"><path class="nn4_--rny"/><path class="g7qlcfhvp"/><rect class="mj3l5tb6u"/><path class="x9avr_b1n"/></g></mask></defs><path mask="url(#SVGlocXbbMI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:fingernail"} {...others} />);
}

export default Component;
