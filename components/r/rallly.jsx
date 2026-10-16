import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zobmxybrj.css';
import '../../css/c/ctkeepu1l.css';
import '../../css/f/f7s-pimzp.css';

const viewBox = {"width":30,"height":30};
const content = `<g class="ft5dv1b6b"><rect class="zobmxybrj"/><path class="ctkeepu1l"/><path clip-rule="evenodd" class="f7s-pimzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rallly"} {...others} />);
}

export default Component;
