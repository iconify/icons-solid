import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fltvq2btj.css';
import '../../css/f/f8zfg8btv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fltvq2btj"/><path class="f8zfg8btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:u-turn-left"} {...others} />);
}

export default Component;
