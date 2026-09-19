import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/x/x0f6bfnym.css';
import '../../css/t/t65jmltua.css';
import '../../css/s/sru92qe_j.css';
import '../../css/z/zqqsr_h7r.css';
import '../../css/x/x89h4ccdu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="x0f6bfnym"/><path class="t65jmltua"/><path class="sru92qe_j"/><path class="zqqsr_h7r"/><circle class="x89h4ccdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:stapler"} {...others} />);
}

export default Component;
