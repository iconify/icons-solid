import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bd1cxq6hl.css';
import '../../css/n/nnatxnbss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bd1cxq6hl"/><path class="nnatxnbss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-minus"} {...others} />);
}

export default Component;
