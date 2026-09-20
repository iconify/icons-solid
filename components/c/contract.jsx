import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t9t9-0big.css';
import '../../css/n/n7w-9xj0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t9t9-0big"/><path class="n7w-9xj0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:contract"} {...others} />);
}

export default Component;
