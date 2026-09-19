import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/v-p85cctf.css';
import '../../css/e/ec-b4pmcq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAycsKciL"><g class="wwvp95byt"><path class="v-p85cctf"/><path class="ec-b4pmcq"/></g></mask></defs><path mask="url(#SVGAycsKciL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:nintendo-switch"} {...others} />);
}

export default Component;
