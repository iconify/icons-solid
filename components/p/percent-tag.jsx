import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/recl8bc8n.css';
import '../../css/x/xiag7jvar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="recl8bc8n"/><path clip-rule="evenodd" class="xiag7jvar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:percent-tag"} {...others} />);
}

export default Component;
