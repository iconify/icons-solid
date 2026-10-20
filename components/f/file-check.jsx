import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qj6cpfxrr.css';
import '../../css/z/zkpq298oo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qj6cpfxrr"/><path class="zkpq298oo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-check"} {...others} />);
}

export default Component;
