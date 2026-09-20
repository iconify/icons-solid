import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wzhcr9b1p.css';
import '../../css/n/n7fkz5-xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wzhcr9b1p"/><path class="n7fkz5-xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:xbox-y"} {...others} />);
}

export default Component;
