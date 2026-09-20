import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwlceor8k.css';

const viewBox = {"width":261.922,"height":345.941};
const content = `<path class="uwlceor8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:penpot-dark"} {...others} />);
}

export default Component;
