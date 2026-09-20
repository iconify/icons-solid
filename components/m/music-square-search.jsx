import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wam95vb3m.css';
import '../../css/l/lkq7kmb6r.css';
import '../../css/o/o91kfxbtx.css';
import '../../css/t/t183jetlw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wam95vb3m"/><path class="lkq7kmb6r"/><path class="o91kfxbtx"/><path class="t183jetlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-square-search"} {...others} />);
}

export default Component;
