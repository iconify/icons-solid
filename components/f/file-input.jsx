import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cjqtp0b_c.css';
import '../../css/g/g2ncgwkcx.css';
import '../../css/e/esaau7bpo.css';
import '../../css/k/kz79jgp0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cjqtp0b_c"/><path class="g2ncgwkcx"/><path class="esaau7bpo"/><path class="kz79jgp0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-input"} {...others} />);
}

export default Component;
