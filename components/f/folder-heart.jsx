import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fqxz30brl.css';
import '../../css/t/tm5a-nbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fqxz30brl"/><path class="tm5a-nbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:folder-heart"} {...others} />);
}

export default Component;
