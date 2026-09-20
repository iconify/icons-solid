import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0q0dtbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u0q0dtbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-dot-bold"} {...others} />);
}

export default Component;
