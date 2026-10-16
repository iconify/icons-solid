import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/g/g6g9lbc2o.css';
import '../../css/g/g2eya_bfx.css';
import '../../css/h/hq7hygbua.css';
import '../../css/x/xg9esvbka.css';
import '../../css/j/jydnjchaw.css';

const viewBox = {"width":905,"height":822};
const content = `<g class="n1mjunbsu"><path class="g6g9lbc2o"/><path class="g2eya_bfx"/><path class="hq7hygbua"/><path class="xg9esvbka"/><path class="jydnjchaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:opencost-dark"} {...others} />);
}

export default Component;
