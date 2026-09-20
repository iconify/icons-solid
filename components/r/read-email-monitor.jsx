import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t54ktca4z.css';
import '../../css/c/cwxo5jb5w.css';
import '../../css/g/gqeq4hb4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t54ktca4z"/><path class="cwxo5jb5w"/><path class="gqeq4hb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:read-email-monitor"} {...others} />);
}

export default Component;
