import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxp1t4b7y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vxp1t4b7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:workspace-import"} {...others} />);
}

export default Component;
