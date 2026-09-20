import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwbvoi8sn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uwbvoi8sn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:left-down-duotone"} {...others} />);
}

export default Component;
