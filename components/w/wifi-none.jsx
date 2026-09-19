import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/f/fggvvekwy.css';
import '../../css/r/r7ekljbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="fggvvekwy"/><path class="r7ekljbrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:wifi-none"} {...others} />);
}

export default Component;
