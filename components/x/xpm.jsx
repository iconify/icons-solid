import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tbu58ltdb.css';
import '../../css/b/bzdv1ob_h.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="tbu58ltdb"/><path class="bzdv1ob_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xpm"} {...others} />);
}

export default Component;
