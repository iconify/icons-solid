import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/ggclseb0g.css';
import '../../css/o/of4mc-rsl.css';
import '../../css/f/f-axaw8df.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ggclseb0g"/><circle class="of4mc-rsl"/><path class="f-axaw8df"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-co-editing"} {...others} />);
}

export default Component;
