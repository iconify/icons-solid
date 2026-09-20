import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6ohxsygm.css';
import '../../css/l/lrkz-mbtc.css';
import '../../css/a/a4hjqmbpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n6ohxsygm"/><path class="lrkz-mbtc"/><path class="a4hjqmbpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:stairs-descend"} {...others} />);
}

export default Component;
