import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmlg3s19r.css';

const viewBox = {"width":25,"height":24};
const content = `<path clip-rule="evenodd" class="pmlg3s19r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bold"} {...others} />);
}

export default Component;
