import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmdpr8b1x.css';
import '../../css/i/iysxbi1pg.css';
import '../../css/v/vhnu_io7d.css';
import '../../css/r/rh3b5mb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bmdpr8b1x"/><path class="iysxbi1pg"/><path class="vhnu_io7d"/><path class="rh3b5mb2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mosque-1"} {...others} />);
}

export default Component;
