import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7dzkrlxv.css';
import '../../css/d/dqolircih.css';
import '../../css/s/s368qvblr.css';
import '../../css/g/gfx4g_65m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u7dzkrlxv"/><circle class="dqolircih"/><circle class="s368qvblr"/><circle class="gfx4g_65m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chart-network"} {...others} />);
}

export default Component;
