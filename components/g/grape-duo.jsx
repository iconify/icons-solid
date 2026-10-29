import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z8rknehdi.css';
import '../../css/z/zv1ng1bfo.css';
import '../../css/w/wabha5b6m.css';
import '../../css/i/iyduq7-od.css';
import '../../css/x/x2f5ebbeb.css';
import '../../css/l/lhyb3bbbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z8rknehdi"/><path class="zv1ng1bfo"/><path class="wabha5b6m"/><path class="iyduq7-od wm-a"/><path class="wm-a x2f5ebbeb"/><path class="lhyb3bbbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:grape-duo"} {...others} />);
}

export default Component;
