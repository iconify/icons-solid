import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mwj_pnbbj.css';
import '../../css/y/y3p79xb6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mwj_pnbbj"/><path class="y3p79xb6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:calculator"} {...others} />);
}

export default Component;
