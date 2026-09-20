import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z8a101bkk.css';
import '../../css/p/pewxaj54e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z8a101bkk"/><path class="pewxaj54e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-cancel"} {...others} />);
}

export default Component;
