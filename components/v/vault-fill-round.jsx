import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj17cl5vs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gj17cl5vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:vault-fill-round"} {...others} />);
}

export default Component;
