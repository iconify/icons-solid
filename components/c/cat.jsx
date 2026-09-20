import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v9dp49bqe.css';
import '../../css/s/sm3j_cbmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v9dp49bqe"/><path class="sm3j_cbmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cat"} {...others} />);
}

export default Component;
