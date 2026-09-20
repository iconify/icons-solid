import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amxs67rqb.css';
import '../../css/t/ty7516ydb.css';
import '../../css/t/t_f65iten.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="amxs67rqb"/><circle class="ty7516ydb"/><circle class="t_f65iten"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:percent"} {...others} />);
}

export default Component;
