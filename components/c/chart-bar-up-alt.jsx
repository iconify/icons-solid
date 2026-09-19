import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg5xmcbpc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rg5xmcbpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chart-bar-up-alt"} {...others} />);
}

export default Component;
