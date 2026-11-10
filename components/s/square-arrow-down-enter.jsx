import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bqhorhbey.css';
import '../../css/a/aopmvfb2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bqhorhbey"/><path class="aopmvfb2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-arrow-down-enter"} {...others} />);
}

export default Component;
