import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l_iysxblp.css';
import '../../css/o/oykyqvv2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="l_iysxblp"/><path class="oykyqvv2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:tv"} {...others} />);
}

export default Component;
