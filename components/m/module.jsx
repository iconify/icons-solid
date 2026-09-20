import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/o/ocisskime.css';
import '../../css/i/itado9-om.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="ocisskime"/><path class="itado9-om"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:module"} {...others} />);
}

export default Component;
