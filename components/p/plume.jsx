import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmneijx0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mmneijx0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:plume"} {...others} />);
}

export default Component;
