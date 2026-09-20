import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sdnv_bclj.css';
import '../../css/q/qw34h8bgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sdnv_bclj"/><path class="qw34h8bgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:info-triangle"} {...others} />);
}

export default Component;
