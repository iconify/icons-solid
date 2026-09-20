import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k57n1abak.css';
import '../../css/c/c-kvunkxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k57n1abak"/><path class="c-kvunkxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:walk"} {...others} />);
}

export default Component;
