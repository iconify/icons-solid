import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu1eihbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu1eihbtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dolphin-dphnai"} {...others} />);
}

export default Component;
