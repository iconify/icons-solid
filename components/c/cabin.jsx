import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ul36bu9lo.css';
import '../../css/q/qtnml8brb.css';
import '../../css/b/b8tlqiz5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ul36bu9lo"/><path class="qtnml8brb"/><path class="b8tlqiz5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:cabin"} {...others} />);
}

export default Component;
