import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ujco1sofn.css';
import '../../css/t/tnu8150qt.css';
import '../../css/h/hg6wvbcts.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ujco1sofn"/><path class="tnu8150qt"/><path class="hg6wvbcts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:city-hall-flat"} {...others} />);
}

export default Component;
