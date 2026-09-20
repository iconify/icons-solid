import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mz11_egsi.css';
import '../../css/e/exk07v5nf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mz11_egsi"/><path class="exk07v5nf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ad-2"} {...others} />);
}

export default Component;
