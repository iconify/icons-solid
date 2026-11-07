import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ar3grmbxb.css';
import '../../css/o/ohscxxbjx.css';
import '../../css/x/x0ga9cfcw.css';
import '../../css/o/o7fi5_bdy.css';
import '../../css/q/qwupe9yaw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ar3grmbxb"/><path class="ohscxxbjx"/><path class="x0ga9cfcw"/><path clip-rule="evenodd" class="o7fi5_bdy"/><path class="qwupe9yaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-2-bold"} {...others} />);
}

export default Component;
