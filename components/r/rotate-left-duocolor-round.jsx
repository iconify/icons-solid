import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gqbh24_yz.css';
import '../../css/u/uv591sb9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gqbh24_yz"/><path class="uv591sb9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rotate-left-duocolor-round"} {...others} />);
}

export default Component;
