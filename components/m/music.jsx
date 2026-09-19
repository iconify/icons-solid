import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/lykxh_xfl.css';
import '../../css/t/tzlf5tbgi.css';
import '../../css/s/sczcljbtn.css';
import '../../css/c/cclqtm0bg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="lykxh_xfl"/><path class="tzlf5tbgi"/><path class="sczcljbtn"/><path class="cclqtm0bg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:music"} {...others} />);
}

export default Component;
