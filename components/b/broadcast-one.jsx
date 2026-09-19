import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csw0kbbpv.css';
import '../../css/w/wckasab0r.css';
import '../../css/e/ed5_y302y.css';
import '../../css/f/fw_40y71x.css';
import '../../css/e/em5bsmbgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0kqMBeBB"><g class="csw0kbbpv"><path class="wckasab0r"/><path class="ed5_y302y"/><path class="fw_40y71x"/><path class="em5bsmbgk"/></g></mask></defs><path mask="url(#SVG0kqMBeBB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:broadcast-one"} {...others} />);
}

export default Component;
