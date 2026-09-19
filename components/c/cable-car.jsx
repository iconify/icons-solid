import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/hzb0xebym.css';
import '../../css/z/z9jpn_beu.css';
import '../../css/y/y8m0unbnp.css';
import '../../css/n/nz3crbbcj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlJz1ipcX"><g class="rohhhzb0l"><path class="hzb0xebym"/><path class="z9jpn_beu"/><path class="y8m0unbnp"/><path class="nz3crbbcj"/></g></mask></defs><path mask="url(#SVGlJz1ipcX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cable-car"} {...others} />);
}

export default Component;
