import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwxh6wbxo.css';
import '../../css/d/dep5o0bgr.css';
import '../../css/u/uypy_pbjf.css';
import '../../css/x/xcufq3-ob.css';
import '../../css/x/x1dbbnbjc.css';
import '../../css/r/ro1ftgbbo.css';
import '../../css/u/u_l2q8bcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwxh6wbxo"/><path class="dep5o0bgr"/><path class="uypy_pbjf"/><path class="xcufq3-ob"/><path class="x1dbbnbjc"/><path class="ro1ftgbbo"/><path class="u_l2q8bcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sdn"} {...others} />);
}

export default Component;
