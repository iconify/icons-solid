import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww0e8n4yy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ww0e8n4yy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:svelte"} {...others} />);
}

export default Component;
