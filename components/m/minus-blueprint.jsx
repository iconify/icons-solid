import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zyxcjtjat.css';
import '../../css/r/rafbkgb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="zyxcjtjat"/><path class="rafbkgb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minus-blueprint"} {...others} />);
}

export default Component;
