import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suhh-xi_j.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="suhh-xi_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-document-stroke-12"} {...others} />);
}

export default Component;
