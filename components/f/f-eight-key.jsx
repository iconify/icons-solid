import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/qhvovpbja.css';
import '../../css/r/rfbqxvydy.css';
import '../../css/y/ym-r2bver.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGppvbXcOf"><g class="rohhhzb0l"><rect class="qhvovpbja"/><path class="rfbqxvydy"/><path class="ym-r2bver"/></g></mask></defs><path mask="url(#SVGppvbXcOf)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:f-eight-key"} {...others} />);
}

export default Component;
