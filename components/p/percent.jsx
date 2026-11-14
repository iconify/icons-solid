import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/z/znb5wjb1l.css';
import '../../css/b/bxw8ohblp.css';
import '../../css/m/mdvyr0s8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="znb5wjb1l"/><circle class="bxw8ohblp"/><circle class="mdvyr0s8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:percent"} {...others} />);
}

export default Component;
