import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd42uxbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gd42uxbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:a-large-small-fill"} {...others} />);
}

export default Component;
