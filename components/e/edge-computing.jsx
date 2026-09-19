import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cim0r-4qu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cim0r-4qu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:edge-computing"} {...others} />);
}

export default Component;
