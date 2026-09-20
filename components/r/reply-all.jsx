import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mrba4xy6t.css';
import '../../css/d/dfwy9gb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mrba4xy6t"/><path class="dfwy9gb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:reply-all"} {...others} />);
}

export default Component;
