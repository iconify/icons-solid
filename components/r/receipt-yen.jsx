import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-sfe0bwq.css';
import '../../css/b/b97gqjbro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p-sfe0bwq"/><path class="b97gqjbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:receipt-yen"} {...others} />);
}

export default Component;
