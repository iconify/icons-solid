import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pdtnlsbaa.css';
import '../../css/t/tt326gbdl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="pdtnlsbaa"/><path class="tt326gbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:storm"} {...others} />);
}

export default Component;
