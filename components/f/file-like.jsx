import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yki1o-_ih.css';
import '../../css/t/t1kyvxf1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yki1o-_ih"/><path class="t1kyvxf1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-like"} {...others} />);
}

export default Component;
