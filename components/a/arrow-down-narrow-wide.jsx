import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kz2vv8csr.css';
import '../../css/z/z0s8mnbxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kz2vv8csr"/><path class="z0s8mnbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-down-narrow-wide"} {...others} />);
}

export default Component;
