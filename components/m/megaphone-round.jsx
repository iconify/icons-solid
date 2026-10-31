import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6qg4zccu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6qg4zccu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:megaphone-round"} {...others} />);
}

export default Component;
