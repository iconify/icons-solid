import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xs9iz4-ll.css';
import '../../css/n/ntjhsq57z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xs9iz4-ll"/><path class="ntjhsq57z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:edit"} {...others} />);
}

export default Component;
