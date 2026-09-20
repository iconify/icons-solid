import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b8z6mjbxj.css';
import '../../css/u/u43sl660a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b8z6mjbxj"/><path class="u43sl660a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-bootstrap"} {...others} />);
}

export default Component;
