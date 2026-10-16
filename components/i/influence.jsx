import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p56r-9gea.css';
import '../../css/x/xx_qfjbte.css';
import '../../css/y/y08wrnukj.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="p56r-9gea"/><g transform="matrix(.75 0 0 .75 8 8)"><circle class="xx_qfjbte"/><path class="y08wrnukj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:influence"} {...others} />);
}

export default Component;
