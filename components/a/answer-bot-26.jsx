import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvng27k2m.css';
import '../../css/u/utmbef4et.css';

const viewBox = {"width":26,"height":26};
const content = `<rect class="cvng27k2m"/><rect class="utmbef4et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:answer-bot-26"} {...others} />);
}

export default Component;
