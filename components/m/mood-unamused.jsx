import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/ptohnwrku.css';
import '../../css/j/jba_khbaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ptohnwrku"/><path class="jba_khbaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-unamused"} {...others} />);
}

export default Component;
