import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yjzaxtb5n.css';
import '../../css/h/h1ze9n2qc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yjzaxtb5n"/><path class="h1ze9n2qc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:archive-off"} {...others} />);
}

export default Component;
