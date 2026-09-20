import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzw-b8bud.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mzw-b8bud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-plus-outline"} {...others} />);
}

export default Component;
