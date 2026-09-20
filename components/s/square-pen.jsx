import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pgrmf7kuf.css';
import '../../css/y/yvx90tbmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pgrmf7kuf"/><path class="yvx90tbmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-pen"} {...others} />);
}

export default Component;
