import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pcflsrbga.css';
import '../../css/d/dto95jbvb.css';
import '../../css/v/vsle8o47l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pcflsrbga"/><circle class="dto95jbvb"/><path class="vsle8o47l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:text-search"} {...others} />);
}

export default Component;
