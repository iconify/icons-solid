import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v3jqt_b0q.css';
import '../../css/x/xof128b9m.css';
import '../../css/l/lgg-pmbrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v3jqt_b0q"/><path class="xof128b9m"/><path class="lgg-pmbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:wifi-signal-4"} {...others} />);
}

export default Component;
