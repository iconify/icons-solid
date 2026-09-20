import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/iyv178b8t.css';
import '../../css/d/dgcj-rc-h.css';
import '../../css/p/pbavudbas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="iyv178b8t"/><path class="dgcj-rc-h"/><path class="pbavudbas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:view-2"} {...others} />);
}

export default Component;
