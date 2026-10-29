import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fqvks2byp.css';
import '../../css/t/tgpt75tqs.css';
import '../../css/v/v03hklb9o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fqvks2byp wm-k"/><path class="tgpt75tqs wm-a"/><path class="v03hklb9o wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:receipt"} {...others} />);
}

export default Component;
