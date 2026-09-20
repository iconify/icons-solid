import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ha9xtnb5j.css';
import '../../css/a/a3mdr8f8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ha9xtnb5j"/><path class="a3mdr8f8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:christmas-ball"} {...others} />);
}

export default Component;
