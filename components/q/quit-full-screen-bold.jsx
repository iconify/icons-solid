import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwsr-b07g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hwsr-b07g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-full-screen-bold"} {...others} />);
}

export default Component;
