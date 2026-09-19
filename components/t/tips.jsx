import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/ven960eol.css';
import '../../css/f/fmc-dpppl.css';
import '../../css/o/ocv1-uqro.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCrHiRbFp"><g class="wwvp95byt"><path class="ven960eol"/><path class="fmc-dpppl"/><path class="ocv1-uqro"/></g></mask></defs><path mask="url(#SVGCrHiRbFp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tips"} {...others} />);
}

export default Component;
