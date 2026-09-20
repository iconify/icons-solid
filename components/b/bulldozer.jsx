import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jvinqywwg.css';
import '../../css/u/uf7t9wezo.css';
import '../../css/a/aa72nvbha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jvinqywwg"/><path class="uf7t9wezo"/><path class="aa72nvbha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bulldozer"} {...others} />);
}

export default Component;
