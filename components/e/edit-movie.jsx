import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smq2sc66t.css';
import '../../css/a/aq8sebb3g.css';
import '../../css/m/m9ih-22dw.css';
import '../../css/x/x1w8_4cqz.css';
import '../../css/s/sz7401bni.css';
import '../../css/g/gs3e4lo3o.css';
import '../../css/z/zhfi13zpu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="smq2sc66t"/><path class="aq8sebb3g"/><path class="m9ih-22dw"/><path class="x1w8_4cqz"/><path class="sz7401bni"/><path class="gs3e4lo3o"/><path class="zhfi13zpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:edit-movie"} {...others} />);
}

export default Component;
