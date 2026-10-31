import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e2tx-h9dr.css';
import '../../css/h/hpkjn3bym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e2tx-h9dr"/><path class="hpkjn3bym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:utensils-duocolor-round"} {...others} />);
}

export default Component;
