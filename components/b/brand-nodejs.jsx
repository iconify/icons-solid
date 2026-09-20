import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vjxcsh3sx.css';
import '../../css/a/a9k02uavj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vjxcsh3sx"/><path class="a9k02uavj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-nodejs"} {...others} />);
}

export default Component;
