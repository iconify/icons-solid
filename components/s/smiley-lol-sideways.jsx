import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gp9my6q9g.css';
import '../../css/z/zj0dafbom.css';
import '../../css/c/c8fahbb-l.css';
import '../../css/f/fd5i8ybjs.css';
import '../../css/a/aqk27dwwg.css';
import '../../css/t/tg_qxdkio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gp9my6q9g"/><path class="zj0dafbom"/><path class="c8fahbb-l"/><path class="fd5i8ybjs"/><path class="aqk27dwwg"/><path class="tg_qxdkio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smiley-lol-sideways"} {...others} />);
}

export default Component;
