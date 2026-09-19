import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iadpe-rcf.css';
import '../../css/m/mb9_dccon.css';
import '../../css/k/ksmaa2bot.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSbT5NsOJ"><g class="wwvp95byt"><path class="iadpe-rcf"/><path class="mb9_dccon"/><path class="ksmaa2bot"/></g></mask></defs><path mask="url(#SVGSbT5NsOJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gold-medal"} {...others} />);
}

export default Component;
