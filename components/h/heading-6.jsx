import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cx32p2cis.css';
import '../../css/h/h6zst5bek.css';
import '../../css/h/hb2om2t_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cx32p2cis"/><circle class="h6zst5bek"/><path class="hb2om2t_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:heading-6"} {...others} />);
}

export default Component;
