import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sckvy5b_w.css';
import '../../css/c/c7ol07bni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sckvy5b_w"/><path class="c7ol07bni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:origami"} {...others} />);
}

export default Component;
