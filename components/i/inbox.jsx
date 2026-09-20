import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eu_6qjgvn.css';
import '../../css/b/b8ev_acoa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eu_6qjgvn"/><path class="b8ev_acoa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:inbox"} {...others} />);
}

export default Component;
