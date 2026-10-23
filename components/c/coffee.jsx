import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qodwunbcg.css';
import '../../css/c/cz4_8nymz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qodwunbcg"/><path class="cz4_8nymz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:coffee"} {...others} />);
}

export default Component;
