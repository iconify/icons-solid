import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/o/o30l2nb_d.css';
import '../../css/g/gda4x1kcc.css';
import '../../css/q/qs03ycwcu.css';
import '../../css/h/hzxnxfb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="o30l2nb_d"/><path class="gda4x1kcc"/><path class="qs03ycwcu"/><path class="hzxnxfb9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-startup-mobile"} {...others} />);
}

export default Component;
