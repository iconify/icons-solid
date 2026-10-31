import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xbj-e-6di.css';
import '../../css/z/z3vibnb9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xbj-e-6di"/><path class="z3vibnb9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:coffee-duocolor-round"} {...others} />);
}

export default Component;
