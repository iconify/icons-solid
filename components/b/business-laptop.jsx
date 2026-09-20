import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/plq9osfdd.css';
import '../../css/o/ofad6mbhu.css';
import '../../css/x/xf71xqb2p.css';
import '../../css/j/jxdz78b9r.css';
import '../../css/y/ydbdr18fn.css';
import '../../css/g/gjcl6s4kx.css';
import '../../css/j/jzrt2gbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="plq9osfdd"/><path class="ofad6mbhu"/><path class="xf71xqb2p"/><path class="jxdz78b9r"/><path class="ydbdr18fn"/><path class="gjcl6s4kx"/><path class="jzrt2gbmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-laptop"} {...others} />);
}

export default Component;
