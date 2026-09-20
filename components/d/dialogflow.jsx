import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wii_33l7g.css';
import '../../css/z/z05w6h9vf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wii_33l7g"/><path class="z05w6h9vf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:dialogflow"} {...others} />);
}

export default Component;
