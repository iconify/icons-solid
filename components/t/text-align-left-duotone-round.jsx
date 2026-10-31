import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uyy8nwb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uyy8nwb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-align-left-duotone-round"} {...others} />);
}

export default Component;
