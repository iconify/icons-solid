import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/hdueelb-m.css';
import '../../css/j/jq1wfoc4y.css';
import '../../css/z/z6x9mtk0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="hdueelb-m"/><path class="jq1wfoc4y"/><path class="z6x9mtk0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:flu-mask"} {...others} />);
}

export default Component;
