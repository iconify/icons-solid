import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nt-gltsgq.css';
import '../../css/e/eb4ipfkkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nt-gltsgq"/><path class="eb4ipfkkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rename"} {...others} />);
}

export default Component;
