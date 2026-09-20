import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/z/zeqsdgyil.css';
import '../../css/a/al9h4e17k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="zeqsdgyil"/><path class="al9h4e17k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-curvy-both-direction-2"} {...others} />);
}

export default Component;
