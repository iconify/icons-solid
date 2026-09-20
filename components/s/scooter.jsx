import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sc8wo_bpe.css';
import '../../css/u/ug46k0pnz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sc8wo_bpe"/><path class="ug46k0pnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:scooter"} {...others} />);
}

export default Component;
