import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k79gm2b1n.css';
import '../../css/c/cobiw4baz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k79gm2b1n"/><path class="cobiw4baz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-minus-duotone"} {...others} />);
}

export default Component;
