import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qja354uqy.css';
import '../../css/c/cs_zrlb6r.css';
import '../../css/x/xnztegt0q.css';
import '../../css/c/c7h_qcbby.css';
import '../../css/x/xiuzu5cqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="qja354uqy"/><path class="cs_zrlb6r"/><path class="xnztegt0q"/><path class="c7h_qcbby"/><path class="xiuzu5cqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:prescription"} {...others} />);
}

export default Component;
