import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oik34rbfa.css';
import '../../css/i/ifrdxluft.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="oik34rbfa"/><path class="ifrdxluft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:jekyll-wordmark"} {...others} />);
}

export default Component;
