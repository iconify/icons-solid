import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tw02yf54n.css';
import '../../css/p/ptmpglb0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tw02yf54n"/><path class="ptmpglb0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sort-ascending-numbers"} {...others} />);
}

export default Component;
