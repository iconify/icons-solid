import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgw2s8gim.css';
import '../../css/e/ez71t2b7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xgw2s8gim"/><path class="ez71t2b7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-bitbucket"} {...others} />);
}

export default Component;
