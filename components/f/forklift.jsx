import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r83_z9bkg.css';
import '../../css/b/bser5vtcv.css';
import '../../css/f/fxwnb7vgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r83_z9bkg"/><circle class="bser5vtcv"/><circle class="fxwnb7vgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:forklift"} {...others} />);
}

export default Component;
