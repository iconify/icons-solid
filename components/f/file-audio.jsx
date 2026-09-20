import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eq22jdc6o.css';
import '../../css/j/jgri_acrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eq22jdc6o"/><path class="jgri_acrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-audio"} {...others} />);
}

export default Component;
