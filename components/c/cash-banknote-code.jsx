import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hf630xb3e.css';
import '../../css/c/cvuyb4ulo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hf630xb3e"/><path class="cvuyb4ulo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash-banknote-code"} {...others} />);
}

export default Component;
