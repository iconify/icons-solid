import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phs4gib1x.css';
import '../../css/x/xulon8bmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="phs4gib1x"/><path class="xulon8bmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-x"} {...others} />);
}

export default Component;
