import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/spglryb8s.css';
import '../../css/y/yim90nbkf.css';
import '../../css/x/xfdvzbb0y.css';
import '../../css/a/ash50uz4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="spglryb8s"/><path class="yim90nbkf"/><path class="xfdvzbb0y"/><path class="ash50uz4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:allowances-no-photos"} {...others} />);
}

export default Component;
