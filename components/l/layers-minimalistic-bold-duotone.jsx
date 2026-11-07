import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/scnak0aak.css';
import '../../css/y/ytd1ty3sp.css';
import '../../css/l/l4m659k1r.css';
import '../../css/l/lnsoa8bqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="scnak0aak"/><path class="ytd1ty3sp"/></g><path class="l4m659k1r"/><path class="lnsoa8bqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layers-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
